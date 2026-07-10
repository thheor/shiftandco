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
