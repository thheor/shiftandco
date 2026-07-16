import "dotenv/config";
import app from "./app.ts";
import Logger from "./config/logger.ts";

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      Logger.info(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    Logger.error(`Failed to start server ${error}`);
    process.exit(1);
  }
};

start();
