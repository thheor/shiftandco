import { MainLayout } from "@/layouts/MainLayout";
import { RegisterCard } from "@/components/RegisterCard";

export function Register() {
  return (
    <MainLayout
      title="SHIFT&CO | Login"
      className="flex justify-center items-center"
    >
      <section className="flex justify-center">
        <RegisterCard />
      </section>
    </MainLayout>
  );
}
