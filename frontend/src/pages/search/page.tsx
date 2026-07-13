import { useState, useEffect, type SubmitEvent } from "react";
import { useSearchParams } from "react-router";
import { useDataProductContext } from "@/contexts/contexts";
import { useDebounce } from "@/hooks/hooks";
import { MainLayout } from "@/layouts/MainLayout";
import { Facets } from "@/components/Facets";
import { Field } from "@/components/ui/field";
import { SearchPopover } from "@/components/SearchPopover";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import type { DataProduct } from "@/lib/definitions";
import { ProductCard } from "@/components/ProductCard";

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

const trendings = ["T-Shirts", "Sweaters", "Outerwares", "SPRING 2026"];

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(
    searchParams.get("keyword")?.toString() || "",
  );
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<DataProduct[]>([]);
  const products = useDataProductContext();
  const debounceSearch = useDebounce<string>(search);

  useEffect(() => {
    if (searchParams.get("keyword")) {
      const productResult = getSearchResults();
      setSearchResults(productResult);
      console.log("masuk");
      setIsSubmit(false);
    }

    if (search) {
      const productSuggestions = getSuggestions();
      setSuggestions(productSuggestions);
    } else {
      setSuggestions([]);
      setSearchResults([]);
    }
  }, [isSubmit, debounceSearch]);

  const getSuggestions = () => {
    const productName = products.map((product) => product.name);
    const results = productName.filter((product) =>
      product.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
    return results;
  };

  const getSearchResults = () => {
    const results = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
    return results;
  };

  const clickSuggestion = (value: string) => {
    setSearch(value);
    handleSearch(value);
    setSearchParams({ keyword: value });
  };

  const handleSearch = (term: string) => {
    setIsSubmit(true);
    setSearch(term);
    if (term) {
      setSearchParams({ keyword: term });
    } else {
      setSearchParams({});
    }
  };

  const handleSubmit = (term: string) => {};

  return (
    <MainLayout title="SHIFT&CO | Search Products" className="px-42">
      <section className=" pt-8">
        <h1 className="font-semibold text-2xl">Search</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(search);
          }}
          className="w-xl pt-4"
        >
          <Field orientation="horizontal">
            <InputGroup>
              <InputGroupInput
                value={search}
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                onFocus={() => setIsSearch(true)}
                onBlur={() => setIsSearch(false)}
                type="text"
                placeholder="Search..."
              />
              <InputGroupAddon align="inline-end">
                <Search size={24} />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <SearchPopover
            className={`${isSearch ? "block" : "hidden"} w-xl mt-1 absolute`}
            clickSuggestion={clickSuggestion}
            trendings={trendings}
            suggestions={suggestions}
          />
        </form>
        <Facets
          className="mt-2"
          availability={availability}
          sortOptions={sortOptions}
          products={100}
        />
      </section>
      <section className="">
        <div className="grid grid-cols-4 gap-2 place-items-stretch">
          {searchResults.map((product: DataProduct) => (
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
      </section>
    </MainLayout>
  );
}
