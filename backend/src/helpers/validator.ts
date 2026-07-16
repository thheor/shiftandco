import { z } from "zod";
import { type Request, type Response, type NextFunction } from "express";

export const ValidationSource = {
  BODY: "body",
  HEADER: "headers",
  QUERY: "query",
  PARAM: "params",
} as const;

type ValidationSource =
  (typeof ValidationSource)[keyof typeof ValidationSource];

export default (
    schema: z.ZodType,
    source: ValidationSource = ValidationSource.BODY,
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[source]);

    if (result.success) return next();

    const message = result.error.issues.map((issue, index) => {
      const field = issue.path.at(index);
      return field ? `${String(field)}: ${issue.message}` : `${issue.message}`;
    });

    return res.status(400).json({
      message: message,
    });
  };
