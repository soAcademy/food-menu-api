import { Orders } from "../entity/orders";
import { OrdersItem } from "../entity/orders_item";
import { Request, Response } from "express";
import { AppDataSource } from "../datasource";

const transformOrdersData = (results: any) => {
  const data = results.reduce((arr: any, r: any) => {
    if (!arr[r.order_id])
      arr[r.order_id] = {
        order_id: r.order_id,
        table_id: r.table_id,
        status: r.status,
        total_price: 0,
        items: [],
      };
    arr[r.order_id].total_price += r.total_price;
    arr[r.order_id].items.push({
      id: r.id,
      menu_id: r.menu_id,
      price: r.price,
      quantity: r.quantity,
      total_price: r.total_price,
      name: r.name,
      image: r.image,
      category: r.category,
    });
    return arr;
  }, {});

  return Object.keys(data)
    .map((key) => data[key])
    .sort((v1, v2) => v2.order_id - v1.order_id);
}

export const getOrders = async (req: Request, res: Response) => {
  const results = await AppDataSource.query(`SELECT * FROM orders_item
      LEFT JOIN orders ON orders_item.order_id = orders.id
      LEFT JOIN menu ON menu.id = orders_item.menu_id`);

  return res.status(200).json(transformOrdersData(results));
};

export const getOrdersByTable = async (req: Request, res: Response) => {
  const results = await AppDataSource.query(`SELECT * FROM orders_item
      LEFT JOIN orders ON orders_item.order_id = orders.id
      LEFT JOIN menu ON menu.id = orders_item.menu_id
      WHERE orders.table_id = ${req.body.table_id}`);

  return res.status(200).json(transformOrdersData(results));
};

export const createOrder = async (req: Request, res: Response) => {
  const order = await AppDataSource.getRepository(Orders).save({
    table_id: req.body.table_id,
  });

  await AppDataSource.createQueryBuilder()
    .insert()
    .into(OrdersItem)
    .values(
      req.body.items.map((item: any) => ({
        order_id: order.id,
        menu_id: item.menu_id,
        price: item.price,
        quantity: item.quantity,
        total_price: item.total_price,
      }))
    )
    .execute();

  return res.status(200).json(order);
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  const order = await AppDataSource.getRepository(Orders).findOneBy({ id: req.body.order_id });
  order.status = req.body.status;
  const result = await AppDataSource.getRepository(Orders).save(order);

  return res.status(200).json(result);
}
