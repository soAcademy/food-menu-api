import * as express from 'express';
import { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/management/health', (req: Request, res: Response) => {
  res.send("OK2");
});

app.listen(3000);
