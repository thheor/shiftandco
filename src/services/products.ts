import data from "@/data/data.json";

export const getProducts = () => {
  try {
    return data.products["t-shirts"];
  } catch (error) {
    throw new Error(`Products is not available in the data.json`);
  }
};
