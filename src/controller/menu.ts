import { Menu } from "../entity/menu";
import { Request, Response } from "express";
import { AppDataSource } from "../datasource";

export const getMenus = async (req: Request, res: Response) => {
  const results = await AppDataSource.getRepository(Menu)
    .createQueryBuilder("menu")
    .getMany();

  return res.status(200).json(results);
};
