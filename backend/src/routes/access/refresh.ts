import { Router, type Request, type Response } from "express";
import { ValidationSource } from "../../helpers/validator.ts";
import { getAccessToken } from "../../core/auth/authUtils.ts";
import { findById } from "../../database/repository/UserRepo.ts";
import validator from "../../helpers/validator.ts";
import schema from "./schema.ts";
import { generateRefreshToken } from "../../core/auth/jwt.ts";

const router: Router = Router();

router.post(
  "/refresh/:id",
  validator(schema.token),
  validator(schema.auth, ValidationSource.HEADER),
  async (req: Request, res: Response) => {
    const userId = req.params.id;
    const accessToken = getAccessToken(req.headers.authorization as string);

    const user = await findById(userId as string);

    if (!user) {
      return res.status(400).json({
        statusCode: "10001",
        message: "User not registered",
      });
    }

    const refreshToken = generateRefreshToken({ email: req.body.email });

    return res.status(200).json({
      statusCode: "10001",
      tokens: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  },
);

export default router;
