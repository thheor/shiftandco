import "dotenv/config";

const config = {
  accessTokenKey: process.env.ACCESS_TOKEN_KEY || "",
  refreshTokenKey: process.env.REFRESH_TOKEN_KEY || "",
};

export default config;
