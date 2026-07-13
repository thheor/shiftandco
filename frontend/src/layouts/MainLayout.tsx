import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function MainLayout({
  children,
  className,
  title,
}: {
  children: ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden scroll-smooth">
      <title>{title}</title>
      <header>
        <Navbar />
      </header>
      <main className={`${className} grow w-screen`}>{children}</main>
      <Footer />
    </div>
  );
}
