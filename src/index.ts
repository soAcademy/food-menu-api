import "reflect-metadata";
import * as express from "express";
import { Application, Request, Response } from "express";
import { createConnection } from "typeorm";

import { AppRoutes } from "./routes";

void createConnection().then(() => {
  const app: Application = express();

  app.use(express.json());

  app.get("/management/health", (req: Request, res: Response) => {
    res.send("OK");
  });

  AppRoutes.forEach((route) => {
    app[route.method](
      route.path,
      (request: Request, response, Response, next: any) =>
        route
          .action(request, response)
          .then(() => next)
          .catch((err) => next(err))
    );
  });

  app.listen(process.env.PORT || 3000);
});
