import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDown } from "lucide-react";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { NativeSelectOption, NativeSelect } from "./ui/native-select";

interface SortOption {
  name: string;
  value: string;
}

interface Availability {
  name: string;
  id: string;
  label: string;
}

export function Facets({
  availability,
  sortOptions,
  products,
  className,
}: {
  availability: Availability[];
  sortOptions: SortOption[];
  products: number;
  className?: string;
}) {
  return (
    <section className={`${className} flex justify-between items-center pb-8`}>
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
                        <FieldLabel htmlFor={el.id} className="text-black/80">
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
  );
}
