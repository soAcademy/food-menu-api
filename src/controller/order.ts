import { Orders } from "../entity/orders";
import { OrdersItem } from "../entity/orders_item";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

export const getOrders = async (req: Request, res: Response) => {
  const results = await AppDataSource
    .query(`SELECT * FROM orders_item
      LEFT JOIN orders ON orders_item.order_id = orders.id
      LEFT JOIN menu ON menu.id = orders_item.menu_id`);

  return res.status(200).json(results);
};

export const createOrder = async (req: Request, res: Response) => {
  const order = await AppDataSource.getRepository(Orders).save({
    table_id: req.body.table_id,
  });

  const orderItems = await AppDataSource.createQueryBuilder()
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
