import { useDataProductContext } from "@/contexts/contexts";
import { Link } from "react-router";
import { MainLayout } from "@/layouts/MainLayout";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    name: "T-Shirts",
    src: "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/t-shirts/cotton%20volume%20sleeve%20shirt%20blue.avif",
    alt: "T-Shirts Image",
    href: "/woman/t-shirts",
  },
  {
    name: "Sweaters",
    src: "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/sweaters/3d%20knit%20cotton%20volume%20sleeve%20sweater%20green.avif",
    alt: "Sweaters Image",
    href: "/woman/sweaters",
  },
  {
    name: "Outerwears",
    src: "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/outerwares/cotton%20blend%20short%20parka%20jacket%20gray.avif",
    alt: "Outerwears Image",
    href: "/woman/outerwears",
  },
  {
    name: "Jeans",
    src: "https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/collections/woman/jeans/barrel%20jeans%20navy.avif",
    alt: "Jeans Image",
    href: "/woman/jeans",
  },
];

export function Woman() {
  const products = useDataProductContext();

  return (
    <MainLayout title="SHIFTNCO | Collections" className="px-42 ">
      <h1 className="font-semibold text-2xl mt-8 ">Collections</h1>
      <section className="">
        <ul className="grid grid-cols-3 gap-8 justify-items-center-safe w-full py-8">
          {collections.map((collection) => (
            <Card
              key={collection.href}
              name={collection.name}
              src={collection.src}
              alt={collection.alt}
              href={collection.href}
            />
          ))}
        </ul>
      </section>
    </MainLayout>
  );
}

function Card({
  name,
  src,
  alt,
  href,
  className,
  ...props
}: {
  name: string;
  src: string;
  alt: string;
  href: string;
  className?: string;
}) {
  return (
    <li {...props}>
      <Link to={href} className={`group max-w-84 ${className} `}>
        <div className="w-full overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`${name === "Jeans" ? "object-bottom" : "object-top"} aspect-3/3 object-cover rounded-xs hover:scale-105 transition duration-400 ease-in-out`}
          />
        </div>
        <div className="group flex items-center gap-2 pt-4">
          <h3 className="text-lg font-medium">{name}</h3>
          <ArrowRight
            strokeWidth={1.5}
            className="size-5 group-hover:translate-x-0.5 transition duration-200 ease-in"
          />
        </div>
      </Link>
    </li>
  );
}
