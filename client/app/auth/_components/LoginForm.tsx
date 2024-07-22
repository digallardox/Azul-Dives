"use client"
import AuthForm from "./AuthForm";
import { authenticate } from "@/app/_lib/auth/authenticate";
import { Form } from "./form";

const LoginForm = () => {
  return (
    <>
      {/* <AuthForm type="Log in" onSubmit={authenticate} /> */}
      <Form />
    </>
  );
}

export default LoginForm;