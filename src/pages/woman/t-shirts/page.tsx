import { CollectionsLayout } from "@/layouts/CollectionsLayout";
import { ProductCard } from "@/components/ProductCard";
import { CollectionPagination } from "@/components/Pagination";

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

const products = [
  {
    name: "Cotton Volume Sleeve Shirt",
    images: [
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/cotton%20volume%20sleeve%20shirt%20white.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/cotton%20volume%20sleeve%20shirt%20blue.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/cotton%20volume%20sleeve%20shirt%20brown.avif",
    ],
    price: "319.000",
    href: "/woman",
  },
  {
    name: "Denim Boxy Shirt",
    images: [
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/denim%20boxy%20shirt%20black.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/denim%20boxy%20shirt%20blue.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/denim%20boxy%20shirt%20navy.avif",
    ],
    price: "389.000",
    href: "/woman",
  },
  {
    name: "Oxford Boxy Cropped Shirt",
    images: [
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/oxford%20boxy%20cropped%20shirt%20blue.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/oxford%20boxy%20cropped%20shirt%20light%20green.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/oxford%20boxy%20cropped%20shirt%20white.avif",
    ],
    price: "219.000",
    href: "/woman",
  },
  {
    name: "Premium Linen Shirt",
    images: [
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/premium%20linen%20shirt%20blue.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/premium%20linen%20shirt%20natural.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/premium%20linen%20shirt%20pink.avif",
      "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/premium%20linen%20shirt%20red.avif",
    ],
    price: "219.000",
    href: "/woman",
  },
];

export function TShirts() {
  return (
    <CollectionsLayout
      type="T-Shirts & Blouse"
      links={links}
      sortOptions={sortOptions}
      products="100"
      availability={availability}
    >
      <title>Woman | ShiftnCo Woman T-Shirts & Blouse</title>
      <section>
        <div className="grid grid-cols-4 gap-2 place-items-stretch">
          {products.map((product) => (
            <ProductCard
              key={product.href}
              className="mb-10"
              name={product.name}
              price={product.price}
              images={product.images}
              href={product.href}
            />
          ))}
        </div>
        <CollectionPagination />
      </section>
    </CollectionsLayout>
  );
}
