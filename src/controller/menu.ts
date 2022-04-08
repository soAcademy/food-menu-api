import { Menu } from "../entity/menu";
import { Request, Response } from "express";
import { getManager } from "typeorm";

export const getMenus = async (req: Request, res: Response) => {
  const results = await getManager()
    .getRepository(Menu)
    .find({
      select: ["id", "name", "image", "price", "category"],
    });

  console.log(results);
  res.status(200).json(results);
};
