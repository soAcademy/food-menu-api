import "reflect-metadata";
import * as express from "express";
import { Application, Request, Response } from "express";

import { AppRoutes } from "./routes";
import { getMenus } from "controller/menu";

// void AppDataSource.initialize().then(() => {
const app: Application = express();

app.use(express.json());

app.get("/management/health", (req: Request, res: Response) => {
  res.send("OK");
});

app.get("/get-menus", (req: Request, res: Response) => getMenus(req, res));

// AppRoutes.forEach((route) => {
//   app[route.method](
//     route.path,
//     (request: Request, response: Response, next: any) =>
//       route
//         .action(request, response)
//         .then(() => next)
//         .catch((err) => next(err))
//   );
// });

app.listen(process.env.PORT || 3000);
// });
