import { type ComponentProps } from "react";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = ["Sale", "Linen", "T-Shirts", "Shorts", "SPRING 2026"];

type HandleClose = (value: boolean) => void;

export function SearchProduct({ handleClose }: { handleClose: HandleClose }) {
  const handleCloseIcon = (value: boolean) => {
    handleClose(value);
  };

  return (
    <Field orientation="vertical" className="px-24">
      <form className="flex items-center gap-4 pb-2">
        <span onClick={() => handleCloseIcon(true)} className=" cursor-pointer">
          <ChevronLeft size={20} className="text-foreground/60" />
        </span>
        <InputGroup>
          <InputGroupInput type="text" placeholder="Search..." />
          <InputGroupAddon align="inline-end" className="">
            <Search size={4} />
          </InputGroupAddon>
        </InputGroup>
        <span onClick={() => handleCloseIcon(true)} className=" cursor-pointer">
          <X size={20} className="text-foreground/60" />
        </span>
      </form>
      <div className="">
        <h2 className="text-lg text-foreground/80">Trending</h2>
        <ul className="flex gap-4 pt-2">
          {data.map((el) => (
            <li key={el}>
              <TrendingProductsButton name={el} />
            </li>
          ))}
        </ul>
      </div>
    </Field>
  );
}

export function TrendingProductsButton({
  name,
  ...props
}: { name: string } & ComponentProps<"button">) {
  return (
    <Button
      variant="outline"
      size="sm"
      className="flex rounded-2xl text-foreground/70 cursor-pointer"
      {...props}
    >
      <Search size={24} />
      {name}
    </Button>
  );
}
