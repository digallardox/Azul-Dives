"use client"
import AuthForm from "./AuthForm";
import { loginUser } from "@/app/_lib/auth/loginUser";

const LoginForm = () => {
  return (
    <>
      <AuthForm type="Log in" onSubmit={loginUser} />
    </>
  );
}

export default LoginForm;