import "reflect-metadata";
import * as express from "express";
import { Application, Request, Response } from "express";
import { getMenus } from "controller/menu";
import { createOrder, getOrders } from "controller/order";
import { AppDataSource } from "data-source";

AppDataSource.initialize().then(() => {
  const app: Application = express();

  app.use(express.json());

  app.get("/management/health", (req: Request, res: Response) => {
    res.send("OK");
  });

  app.get("/get-menus", (req: Request, res: Response) => getMenus(req, res));

  app.get("/get-orders", (req: Request, res: Response) => getOrders(req, res));

  app.post("/create-order", (req: Request, res: Response) =>
    createOrder(req, res)
  );

  app.listen(process.env.PORT || 3000);
});
