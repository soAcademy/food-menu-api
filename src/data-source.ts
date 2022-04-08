import "reflect-metadata";
import { DataSource } from "typeorm";
import { Menu } from "./entity/menu"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: +process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || "postgres",
  password: process.env.DATABASE_PASSWORD || "password",
  database: process.env.DATABASE_DATABASE || "postgres",
  synchronize: false,
  logging: false,
  // entities: [
  //   process.env.NODE_ENV === 'development'
  //     ? 'src/entity/*.ts'
  //     : 'dist/entity/*.js',
  // ],
  entities: [Menu],
  // cli: {
  //   entitiesDir: "src/entity",
  // },
  // connectionTimeout: 30000,
  // acquireTimeout: 30000,
});

