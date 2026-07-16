import express, { type Express } from "express";
import routes from "./routes/index.ts";

const app: Express = express();

app.use(express.json());

app.use("/", routes);

app.use((req, res) => {
  res.status(404).json({
    status: "failed",
    message: "Endpoint not found",
    statusCode: 404,
  });
});

export default app;
