import data from "@/data/data.json";
import { type DataProduct } from "@/lib/definitions";
import { CollectionsLayout } from "@/layouts/CollectionsLayout";
import { ProductCard } from "@/components/ProductCard";
import { CollectionPagination } from "@/components/Pagination";
import { Facets } from "@/components/Facets";

const links = [
  {
    name: "Spring 2026",
    href: "/woman/spring-2026",
  },
  {
    name: "Core",
    href: "/woman/sweaters",
  },
  {
    name: "Tops",
    href: "/woman/outerwears",
  },
  {
    name: "Knits",
    href: "/woman/jeans",
  },
];

const sortOptions = [
  {
    name: "Featured",
    value: "featured",
  },
  {
    name: "Most relevant",
    value: "most-relevant",
  },
  {
    name: "Best selling",
    value: "best-selling",
  },
  {
    name: "Alphabetically, A-Z",
    value: "a-z",
  },
  {
    name: "Alphabetically, Z-A",
    value: "z-a",
  },
  {
    name: "Price, low to high",
    value: "low-to-high",
  },
  {
    name: "Price, high to low",
    value: "high-to-low",
  },
  {
    name: "Date, old to new",
    value: "old-to-new",
  },
  {
    name: "Date, new to old",
    value: "new-to-old",
  },
];

const availability = [
  {
    name: "in-stock",
    id: "in-stock",
    label: "In stock",
  },
  {
    name: "out-of-stock",
    id: "out-of-stock",
    label: "Out of stock",
  },
];

const dataProducts = data.products["t-shirts"] as unknown as DataProduct[];

export function TShirts() {
  return (
    <CollectionsLayout
      title="Woman | ShiftnCo Woman T-Shirts & Blouse"
      type="T-Shirts & Blouse"
      links={links}
    >
      <section>
        <Facets
          availability={availability}
          sortOptions={sortOptions}
          products={100}
        />
        <div className="grid grid-cols-4 gap-2 place-items-stretch">
          {dataProducts.map((product: DataProduct) => (
            <ProductCard
              key={product.id}
              className="mb-10"
              name={product.name}
              price={product.price}
              variant={product.variant}
              href={product.name}
            />
          ))}
        </div>
        <CollectionPagination />
      </section>
    </CollectionsLayout>
  );
}
