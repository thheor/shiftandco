import { HomePage } from "@/pages/Homepage";
import { TShirts } from "@/pages/woman/t-shirts/page";
import { Woman } from "@/pages/woman/page";
import { Test } from "@/pages/Test";
import { NotFound } from "@/404";
import { createBrowserRouter, RouterProvider } from "react-router";

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
    path: "/*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
