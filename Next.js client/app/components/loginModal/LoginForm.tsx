"use client";

import Button from "../buttons/Primary Button/Button";
import { handleLogin } from "@/lib/queries";
import { useState } from "react";

const LoginForm = () => {
  const [loginFields, setLoginFields] = useState({ email: "", password: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function login() {
    await handleLogin(loginFields);
    window.location.href = "/";
  }

  return (
    <>
      <div id="login">
        <span className="font-semibold text-2xl">Log in</span>
        <div className="flex flex-col items-center justify-center ">
          <form className="w-[460px] border rounded-xxl">
            <input
              className="px-[20px] w-full h-[80px] block h-[20px] border"
              value={loginFields.email}
              name="email"
              onChange={handleChange}
              type="text"
            />

            <input
              className="px-[20px] w-full h-[80px] block h-[20px] border"
              value={loginFields.password}
              name="password"
              onChange={handleChange}
              type="text"
            />
          </form>
          <Button onClick={login} text="Log in" />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
