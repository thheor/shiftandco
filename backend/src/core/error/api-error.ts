export const ErrorType = {
  BAD_TOKEN: "BadTokenError",
  TOKEN_EXPIRED: "TokenExpiredError",
  ACCESS_TOKEN: "BadTokenError",
  UNAUTHORIZED: "UnauthorizedError",
  NOT_FOUND: "NotFoundError",
  INTERNAL: "InternalError",
  NO_ENTRY: "NoEntryError",
  NO_DATA: "NoDataError",
  BAD_REQUEST: "BadRequestError",
  FORBIDDEN: "ForbiddenError",
};

type ErrorType = (typeof ErrorType)[keyof typeof ErrorType];

class ApiError extends Error {
  public statusCode: number;
  public name: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}

export default ApiError;
