const logger = {
  info: (message: string, data = {}) => {
    console.log(`[INFO] ${new Date().toString()} -${message}`, data);
  },
  error: (message: string, error = {}) => {
    console.error(`[ERROR] ${new Date().toString()} -${message}`, error);
  },
  warn: (message: string, data = {}) => {
    console.warn(`[WARN] ${new Date().toString()} -${message}`, data);
  },
};

export default logger;
