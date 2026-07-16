import jwt, { type Secret } from "jsonwebtoken";
import config from "../../config/env.ts";

export const generateAccessToken = (payload: { email: string }) => {
  const accessToken = jwt.sign(payload, config.accessTokenKey as Secret, {
    expiresIn: "15m",
  });

  if (!accessToken) throw new Error("Error while creating access token");

  return accessToken;
};

export const generateRefreshToken = (payload: { email: string }) => {
  const refreshToken = jwt.sign(payload, config.refreshTokenKey as Secret, {
    expiresIn: "7d",
  });

  if (!refreshToken) throw new Error("Error while creating refresh token ");

  return refreshToken;
};

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, config.accessTokenKey);

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, config.refreshTokenKey);
