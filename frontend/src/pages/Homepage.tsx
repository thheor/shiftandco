import { MainLayout } from "@/layouts/MainLayout";
import { Link } from "react-router";

export function HomePage() {
  return (
    <MainLayout title="SHIFTNCO | Homepage" className="">
      <section id="hero" className="w-full">
        <div className="w-full grid grid-cols-2 relative z-10">
          <Link to="/woman" className="overflow-hidden">
            <img
              src="https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/woman.webp"
              alt=""
              loading="lazy"
              className="hover:scale-105 transition duration-500 ease-in-out"
            />
          </Link>
          <Link to="/man" className="overflow-hidden">
            <img
              src="https://pub-296024e8d908449dafd4ac479c1657c0.r2.dev/man.webp"
              alt=""
              loading="lazy"
              className="hover:scale-105 transition duration-500 ease-in-out"
            />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
