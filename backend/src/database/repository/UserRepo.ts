import { sql } from "../../config/neon.ts";

export const findById = async (id: string) => {
  const [user] =
    await sql`SELECT id, avatar, username, email, password, birth_of_date, phone_number 
              FROM users WHERE id = ${id}`;

  return user;
};

export const findByEmail = async (email: string) => {
  const [user] =
    await sql`SELECT id, avatar, username, email, password, birth_of_date, phone_number
              FROM users WHERE email = ${email}`;

  return user;
};

export const findByUsername = async (username: string) => {
  const [user] =
    await sql`SELECT id, avatar, username, email, password, birth_of_date, phone_number
              FROM users WHERE username = ${username}`;

  return user;
};

export const createUser = async ({
  email,
  username,
  password,
  birth_of_date,
}: {
  email: string;
  username: string;
  password: string;
  birth_of_date: string;
}) => {
  const [user] =
    await sql`INSERT INTO users (email, username, password, birth_of_date)
                  VALUES (${email}, ${username}, ${password}, ${birth_of_date})
                  RETURNING id, username, email, password, birth_of_date, phone_number`;

  return user;
};
