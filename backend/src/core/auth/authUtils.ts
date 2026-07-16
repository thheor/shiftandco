export const getAccessToken = (authorization: string) => {
  if (!authorization) return false;
  if (!authorization.startsWith("Bearer ")) return false;

  return authorization.split(" ")[1];
};
