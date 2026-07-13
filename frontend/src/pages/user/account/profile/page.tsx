import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/layouts/MainLayout";

export function Profile() {
  return (
    <MainLayout
      title="SHIFT&CO | Login"
      className="flex justify-center items-center"
    >
      <section className="flex items-center justify-center">
        <FieldGroup className="w-sm">
          <FieldSet>
            <FieldLegend>Profile</FieldLegend>
            <FieldDescription>Manage your account</FieldDescription>
            <FieldGroup className="">
              <Field>
                <FieldLabel>Username</FieldLabel>
                <Input type="text" />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="text" />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field>
            <Button type="button" className="cursor-pointer rounded-xl">
              Save
            </Button>
          </Field>
        </FieldGroup>
      </section>
    </MainLayout>
  );
}
