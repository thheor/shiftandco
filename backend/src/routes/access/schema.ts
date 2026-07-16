import z from "zod";

export default {
  register: z.object({
    email: z.email(),
    password: z.string().min(6),
    username: z.string().min(3),
    profilePicUrl: z.url().optional(),
  }),
  login: z.object({
    email: z.email(),
    password: z.string(),
  }),
  token: z.looseObject({
    refreshToken: z.string("Refresh token is required"),
  }),
  auth: z.object({
    authorization: z.string("Auth header is required").startsWith("Bearer"),
  }),
};
