import { type ComponentProps } from "react";
import { TrendingProductsButton } from "@/components/SearchProduct";

export function SearchPopover({
  trendings,
  suggestions,
  clickSuggestion,
  className,
}: {
  trendings: string[];
  suggestions?: string[];
  clickSuggestion: (value: string) => void;
  className?: string;
}) {
  return (
    <div
      className={`${className} px-8 pt-2 pb-2 bg-background shadow-md rounded-3xl border border-muted-foreground/30 z-100`}
    >
      <h2 className="text-lg mb-2">Trending</h2>
      <ul className={`flex gap-4 py-4 border-t border-t-foreground/30`}>
        {trendings.map((trending) => (
          <li key={trending}>
            <SearchButton
              name={trending}
              onMouseDown={(e) => {
                e.preventDefault();
                clickSuggestion(trending);
              }}
            />
          </li>
        ))}
      </ul>
      {suggestions?.length !== 0 && (
        <h2 className="text-lg mb-2">Suggestions</h2>
      )}
      <ul
        className={`${suggestions?.length !== 0 ? "block" : "hidden"} flex flex-col gap-2 pt-2 border-t border-t-foreground/30`}
      >
        {suggestions?.length !== 0 &&
          suggestions?.map((suggestion) => (
            <li
              key={suggestion}
              onMouseDown={(e) => {
                e.preventDefault();
                clickSuggestion(suggestion);
              }}
            >
              <SearchButton name={suggestion} />
            </li>
          ))}
      </ul>
    </div>
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
