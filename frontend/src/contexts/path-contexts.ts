import { useContext, createContext } from "react";
import type { Navigations } from "@/lib/definitions";

export const NavigationContext = createContext<Navigations | undefined>(
  undefined,
);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationContext",
    );
  }

  return context;
};
