import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router";

interface Links {
  name: string;
  href: string;
}

export function CollectionsLayout({
  children,
  className,
  links,
  type,
  title,
}: {
  children: ReactNode;
  className?: string;
  links: Links[];
  type: string;
  title: string;
}) {
  return (
    <div className="h-screen">
      <header>
        <title>{title}</title>
        <Navbar />
        <div className="grid grid-cols-3 content-center my-8">
          <h1 className="font-semibold text-2xl ml-42">{type}</h1>
          <ul className="flex justify-center items-center gap-8 ">
            {links.map((link: Links, index: number) => (
              <li key={index}>
                <Link to={link.href} className="text-black/80 hover:text-black">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main className={`${className} w-screen px-42`}>{children}</main>
      <Footer />
    </div>
  );
}
