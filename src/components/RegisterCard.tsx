import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";

export function RegisterCard() {
  return (
    <div className="w-sm">
      <h1 className="font-semibold text-2xl text-center mb-2">
        Register Account
      </h1>
      <FieldGroup>
        <Field>
          <FieldLabel>Username</FieldLabel>
          <Input type="text" placeholder="Create username" />
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="text" placeholder="Enter your email" />
        </Field>
        <Field>
          <FieldLabel>Password</FieldLabel>
          <Input type="password" placeholder="Enter password" />
        </Field>
        <Field>
          <Button type="submit" className="rounded-xl cursor-pointer">
            Register
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
