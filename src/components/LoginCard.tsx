import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";

export function LoginCard() {
  return (
    <div className="w-sm">
      <h1 className="font-semibold text-2xl text-center mb-2">Login</h1>
      <FieldGroup>
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
            Login
          </Button>
          <Button
            type="button"
            variant="link"
            className="border border-foreground/30 hover:border-foreground rounded-xl cursor-pointer"
          >
            <Link to="/user/account/register" className="w-full">
              Create Account
            </Link>
          </Button>
        </Field>
      </FieldGroup>
    </div>
  );
}
