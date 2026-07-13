class AppError extends Error {
  public statusCode: number;
  public name: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}

export default AppError;
