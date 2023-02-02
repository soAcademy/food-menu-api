import "reflect-metadata";
import * as express from "express";
import { Application, Request, Response } from "express";
import { getMenus } from "controller/menu";
import {
  createOrder,
  getOrders,
  getOrdersByTable,
  updateOrderStatus,
} from "controller/order";
import { AppDataSource } from "datasource";
import * as cors from "cors";

AppDataSource.initialize().then(() => {
  const app: Application = express();

  app.options("*", cors());
  app.use(
    cors({
      origin: "*",
    })
  );
  app.use(express.json());

  app.get("/management/health", (req: Request, res: Response) => {
    res.send("OK");
  });

  app.post("/get-menus", (req: Request, res: Response) => getMenus(req, res));

  app.post("/get-orders", (req: Request, res: Response) => getOrders(req, res));

  app.post("/get-orders-by-table", (req: Request, res: Response) =>
    getOrdersByTable(req, res)
  );

  app.post("/create-order", (req: Request, res: Response) =>
    createOrder(req, res)
  );

  app.post("/update-order-status", (req: Request, res: Response) =>
    updateOrderStatus(req, res)
  );

  app.listen(process.env.PORT || 3001);
});
