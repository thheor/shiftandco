import type { Navigation, Location } from "react-router";

export interface Variant {
  color: string;
  quantity: number;
  image: string;
}

export interface DataProduct {
  id: string;
  name: string;
  price: string;
  gender: string;
  variant: Variant[];
}

export interface Navigations {
  location: Location;
  navigate: Navigation;
}
