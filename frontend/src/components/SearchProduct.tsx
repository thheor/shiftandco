import {
  useState,
  useEffect,
  type ComponentProps,
  type FormEvent,
} from "react";
import { Link, useNavigate } from "react-router";
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

export function SearchProduct({
  handleClose,
  isSearch,
}: {
  handleClose: HandleClose;
  isSearch: boolean;
}) {
  const [search, setSearch] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (!isSearch) {
      timeoutId = setTimeout(() => {
        setSearch("");
      }, 400);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSearch]);

  const handleCloseIcon = (value: boolean) => {
    handleClose(value);
  };

  const handleSubmit = () => {
    navigate(`/search?keyword=${search}`);
  };

  return (
    <Field orientation="vertical" className="px-24 pt-4">
      <form action={handleSubmit} className="flex items-center gap-4 pb-2">
        <span onClick={() => handleCloseIcon(true)} className=" cursor-pointer">
          <ChevronLeft size={20} className="text-foreground/60" />
        </span>
        <InputGroup>
          <InputGroupInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          <InputGroupAddon align="inline-end" className="">
            <Search size={4} className="cursor-pointer" />
          </InputGroupAddon>
        </InputGroup>
        <span onClick={() => handleCloseIcon(true)} className=" cursor-pointer">
          <X size={20} className="text-foreground/60" />
        </span>
      </form>
      <h2 className="text-lg text-foreground/80">Trending</h2>
      <ul className="flex gap-4 pt-2">
        {data.map((trending) => (
          <li key={trending}>
            <TrendingProductsButton
              name={trending}
              onMouseDown={(e) => {
                e.preventDefault();
                setSearch(trending);
              }}
            />
          </li>
        ))}
      </ul>
      {search?.length !== 0 && <h2 className="text-lg mb-2">Suggestions</h2>}
      <ul
        className={`${search ? "block" : "hidden"} flex flex-col gap-2 pt-2 border-t border-t-foreground/30 transition-all duration-300`}
      >
        {data?.length !== 0 &&
          data?.map((suggestion) => (
            <li
              key={suggestion}
              onMouseDown={(e) => {
                e.preventDefault();
                setSearch(suggestion);
              }}
            >
              <SearchButton name={suggestion} />
            </li>
          ))}
      </ul>
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

function SearchButton({
  name,
  ...props
}: { name: string } & ComponentProps<"button">) {
  return (
    <button
      type="button"
      className="border-none p-0 text-sm cursor-pointer"
      {...props}
    >
      {name}
    </button>
  );
}
