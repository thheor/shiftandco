import express, { type Express } from "express";

const app: Express = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is running",
    timeStamp: new Date().toString(),
  });
});

app.get("/test", (req, res) => {
  res.redirect("/health");
});

app.get("/error", (req, res) => {
  throw new Error("error bang");
});

app.use((req, res) => {
  res.status(404).json({
    status: "failed",
    message: "Endpoint not found",
    statusCode: 404,
  });
});

export default app;
