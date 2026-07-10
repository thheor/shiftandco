import { HomePage } from "@/pages/Homepage";
import { TShirts } from "@/pages/woman/t-shirts/page";
import { Woman } from "@/pages/woman/page";
import { SearchPage } from "@/pages/search/page";
import { NotFound } from "@/404";
import { DataProductContext } from "@/contexts/contexts";
import data from "@/data/data.json";
import type { DataProduct } from "./lib/definitions";
import { createBrowserRouter, RouterProvider } from "react-router";
import { getProducts } from "./services/products";

const products = data.products["t-shirts"] as unknown as DataProduct[];

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/woman",
    Component: Woman,
  },
  {
    path: "/woman/t-shirts",
    Component: TShirts,
  },
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

function App() {
  return (
    <DataProductContext.Provider value={getProducts()}>
      <RouterProvider router={router} />
    </DataProductContext.Provider>
  );
}

export default App;
