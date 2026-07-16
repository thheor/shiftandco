import { Router, type Request, type Response } from "express";
import bcrypt from "bcrypt";
import { findByEmail } from "../../database/repository/UserRepo.ts";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../core/auth/jwt.ts";
import validator from "../../helpers/validator.ts";
import schema from "./schema.ts";

interface User {
  id: string;
  avatar: string | null;
  username: string;
  email: string;
  password: string;
  birth_of_date: string | null;
  phone_number: string | null;
}

const router: Router = Router();

router.post(
  "/basic",
  validator(schema.login),
  async (req: Request, res: Response) => {
    const user = await findByEmail(req.body.email);

    if (!user) {
      return res.status(400).json({
        statusCode: "10001",
        message: "User not registered",
      });
    }

    const match = await bcrypt.compare(
      req.body.password,
      user?.password.toString(),
    );

    if (!match) {
      return res.status(400).json({
        statusCode: "10001",
        message: "Incorrect password",
      });
    }

    const accessToken = generateAccessToken({ email: req.body.email });
    const refreshToken = generateRefreshToken({ email: req.body.email });

    return res.status(200).json({
      statusCode: "10000",
      user: user,
      tokens: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  },
);

export default router;
