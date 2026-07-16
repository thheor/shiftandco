import { Router, type Request, type Response } from "express";
import validator, { ValidationSource } from "../../helpers/validator.ts";
import schema from "../access/schema.ts";
import { verifyAccessToken, verifyRefreshToken } from "../../core/auth/jwt.ts";

const router: Router = Router();

router.post(
  "/",
  validator(schema.auth, ValidationSource.HEADER),
  validator(schema.token),
  (req: Request, res: Response) => {
    try {
      const payload = verifyRefreshToken(req.body.refreshToken);

      if (!payload) throw new Error("Refresh token invalid");
    } catch (error) {
      return res.status(400).json({
        status: "error",
        error: error,
      });
    }

    return res.status(200).json({
      statusCode: "10000",
      message: "You can access this api",
    });
  },
);

export default router;
