import { Router, type Request, type Response } from "express";
import validator from "../../helpers/validator.ts";
import schema from "./schema.ts";
import bcrypt from "bcrypt";
import {
  findByEmail,
  findByUsername,
  createUser,
} from "../../database/repository/UserRepo.ts";
import {
  generateRefreshToken,
  generateAccessToken,
} from "../../core/auth/jwt.ts";

interface UserRequest extends Request {
  body: {
    email: string;
    password: string;
    username: string;
    birth_of_date: string;
  };
}

const router: Router = Router();

router.post(
  "/basic",
  validator(schema.register),
  async (req: UserRequest, res: Response) => {
    const isEmailExist = await findByEmail(req.body.email);

    if (isEmailExist) {
      return res.status(400).json({
        statusCode: "10001",
        message: "Email already exists",
      });
    }

    const isUsernameExist = await findByUsername(req.body.username);

    if (isUsernameExist && isUsernameExist.username === req.body.username) {
      return res.status(400).json({
        statusCode: "10001",
        message: "Username is already used",
      });
    }

    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const newUser = await createUser({
      email: req.body.email,
      username: req.body.username,
      password: passwordHash,
      birth_of_date: req.body.birth_of_date,
    });

    const accessToken = generateAccessToken({ email: req.body.username });
    const refreshToken = generateRefreshToken({ email: req.body.username });

    return res.status(200).json({
      statusCode: "10000",
      messages: "Register successful",
      data: {
        user: newUser,
      },
      tokens: {
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });
  },
);

export default router;
