import { createContext, useContext } from "react";
import { type DataProduct } from "@/lib/definitions";

export const DataProductContext = createContext<DataProduct[] | undefined>(
  undefined,
);

export const useDataProductContext = () => {
  const dataProduct = useContext(DataProductContext);

  if (dataProduct === undefined) {
    throw new Error(
      "useDataProductContext must be used with a DataProductContext",
    );
  }

  return dataProduct;
};
