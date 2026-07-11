import { MainLayout } from "@/layouts/MainLayout";
import { LoginCard } from "@/components/LoginCard";

export function Login() {
  return (
    <MainLayout
      title="SHIFT&CO | Login"
      className="flex justify-center items-center"
    >
      <section className="flex justify-center">
        <LoginCard />
      </section>
    </MainLayout>
  );
}
