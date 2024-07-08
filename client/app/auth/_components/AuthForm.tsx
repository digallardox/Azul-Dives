"use client";
import { useState } from "react";
import { handleChange } from "@/app/_helpers/handleChange";
import { Credentials } from "@/types/apiTypes";
import { reloadPage } from "@/app/_helpers/reloadPage";

type AuthFormProps = {
  type: string;
  onSubmit: (credentials: Credentials) => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await onSubmit(credentials);
    reloadPage()
  };

  return (
    <>
      <div>
        <span className={Styles.title}>{type}</span>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <input
            className={Styles.input}
            value={credentials.username}
            name="username"
            onChange={(e) => handleChange(e, setCredentials)}
            type="text"
          />
          <input
            className={Styles.input}
            value={credentials.password}
            name="password"
            onChange={(e) => handleChange(e, setCredentials)}
            type="password"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

const Styles = {
  title: "font-semibold text-2xl",
  form: "w-[460px] border rounded-xxl",
  input: "px-[20px] w-full h-[80px] block h-[20px] border",
};

export default AuthForm;
