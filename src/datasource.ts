import "reflect-metadata";

import { DataSource } from "typeorm";
import { Orders } from "entity/orders";
import { OrdersItem } from "entity/orders_item";
import { Menu } from "./entity/menu";
import * as dotenv from 'dotenv'
dotenv.config()

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: +process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || "postgres",
  password: process.env.DATABASE_PASSWORD || "password",
  database: process.env.DATABASE_DATABASE || "postgres",
  synchronize: false,
  logging: false,
  entities: [Menu, Orders, OrdersItem],
});
