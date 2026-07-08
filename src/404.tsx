import { MainLayout } from "./layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function NotFound() {
  return (
    <MainLayout
      title="ShiftnCO | Not Found Page"
      className="flex justify-center items-center"
    >
      <section className="flex flex-col justify-center items-center pb-24">
        <h1 className="text-6xl font-black font-poppins">
          404 <span className="font-bold">Not Found</span>
        </h1>
        <p className="text-center mt-2">
          Sorry, the page that you are looking for is not found.
        </p>
        <Link to="/" className="mt-8">
          <Button className="cursor-pointer">Continue shopping</Button>
        </Link>
      </section>
    </MainLayout>
  );
}
