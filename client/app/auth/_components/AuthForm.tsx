"use client";
import { useState } from "react";
import { handleChange } from "@/app/_helpers/handleChange";
import { Credentials } from "@/types/apiTypes";
import { reloadPage } from "@/app/_helpers/reloadPage";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/_lib/auth/authenticate";

type AuthFormProps = {
  type: string;
  onSubmit: (credentials: Credentials) => void;
}; 

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <>
      <div>
        <span className={Styles.title}>{type}</span>
        <form action={dispatch} className={Styles.form}>
          <input
            className={Styles.input}
            value={credentials.username}
            name="username"
            onChange={(e) => handleChange(e, setCredentials)}
            type="text"
            required
          />
          <input
            className={Styles.input}
            value={credentials.password}
            name="password"
            onChange={(e) => handleChange(e, setCredentials)}
            type="password"
            required
          />
          <div>{errorMessage && <p>{errorMessage}</p>}</div>
          <LoginButton />
        </form>
      </div>
    </>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus()
  const handleClick = (event) => {
    if (pending) {
      event.preventDefault()
    }
  }
  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Login
    </button>
  );
}

const Styles = {
  title: "font-semibold text-2xl",
  form: "w-[460px] border rounded-xxl",
  input: "px-[20px] w-full h-[80px] block h-[20px] border",
};

export default AuthForm;
