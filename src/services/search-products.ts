import type { DataProduct } from "@/lib/definitions";

export const searchProductByName = (
  products: DataProduct[],
  target: string,
) => {
  const productsName = products.map((product) => product.name);
  const result = productsName.filter((name) =>
    name.toLowerCase().includes(target.toLowerCase()),
  );
  return result;
};

export const getSearchProducts = (products: DataProduct[], target: string) => {
  const result = products.filter((product) =>
    product.name.toLowerCase().includes(target.toLowerCase()),
  );
  return result;
};
