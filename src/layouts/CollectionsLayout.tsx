import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface Links {
  name: string;
  href: string;
}

interface SortOption {
  name: string;
  value: string;
}

interface Availability {
  name: string;
  id: string;
  label: string;
}

export function CollectionsLayout({
  children,
  className,
  links,
  type,
  products,
  sortOptions,
  availability,
}: {
  children: ReactNode;
  className?: string;
  links: Links[];
  type: string;
  products: string;
  sortOptions: SortOption[];
  availability: Availability[];
}) {
  return (
    <div className="h-screen">
      <header>
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
      <main className={`${className} w-screen px-42`}>
        <section className="flex justify-between items-center pb-8">
          <div className="flex items-center gap-4 ">
            <div className="flex gap-4 ">
              <p>Filter:</p>
              <Popover>
                <PopoverTrigger className="flex gap-2 items-center">
                  <p className="text-sm text-foreground/80">Avalability</p>{" "}
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </PopoverTrigger>
                <PopoverContent align="start">
                  <div className="flex justify-between p-2 border-b border-b-black/20">
                    <p className="text-muted-foreground">0 selected</p>
                    <a href="/" className="underline">
                      Reset
                    </a>
                  </div>
                  <div className="">
                    <FieldGroup>
                      <Field
                        orientation="horizontal"
                        className="flex-col justify-start items-start gap-2"
                      >
                        {availability.map((el: Availability, index) => (
                          <div key={index} className="flex gap-2 items-center">
                            <Checkbox id={el.id} name={el.name} />
                            <FieldLabel
                              htmlFor={el.id}
                              className="text-black/80"
                            >
                              {el.label}
                            </FieldLabel>
                          </div>
                        ))}
                      </Field>
                    </FieldGroup>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger className="relative flex gap-2 items-center">
                  <p className="text-sm text-foreground/80">Price</p>{" "}
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </PopoverTrigger>
                <PopoverContent align="start" className="w-86">
                  <div className="flex justify-between pb-2 border-b border-b-foreground/20">
                    <p className="text-foreground/80">
                      The highest price is Rp 1.399.000,00
                    </p>
                    <a href="/" className="underline">
                      Reset
                    </a>
                  </div>
                  <div className="">
                    <Field>
                      <div className="flex gap-4">
                        <div className="flex gap-4">
                          <FieldLabel htmlFor="from">Rp</FieldLabel>
                          <Input id="from" type="text" placeholder="From" />
                        </div>
                        <div className="flex gap-4">
                          <FieldLabel htmlFor="to">Rp</FieldLabel>
                          <Input id="to" type="text" placeholder="To" />
                        </div>
                      </div>
                    </Field>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>Sort by: </p>
            <NativeSelect className="text-sm text-foreground/80 w-40">
              {sortOptions.map((el: SortOption, index) => (
                <NativeSelectOption
                  key={index}
                  value={el.value}
                  className="text-sm"
                >
                  {el.name}
                </NativeSelectOption>
              ))}
            </NativeSelect>
            <p className="text-base text-black/80">{products} products</p>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
