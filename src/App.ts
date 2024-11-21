import * as express from "express";
import * as cors from "cors";
import { routes } from "./Routes";
import { config as dotEnvConfig } from "dotenv";
import "./database/Connection";

dotEnvConfig();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`[ESPORTS MANAGER API] Listen on http://localhost:${port}`)});
