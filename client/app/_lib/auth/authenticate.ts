"use server"
import serverRequest from "../apiConfig";
import { Credentials } from "@/types/apiTypes";
import { toJSON } from "@/app/_helpers/json";
import { setSession } from "./setSession";
import { z } from 'zod'

const schema = z.object({
  username: z.string({
    invalid_type_error: "Invalid Email",
  }),
  password: z.string({
    invalid_type_error: "Invalid Password",
  }),
});

const config = (formData: any) => {
  const { username, password } = formData

  const body = toJSON({
    login: {
      username: username,
      password: password,
    },
  });

  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };
};

export const authenticate = async (_currentState: unknown, data: FormData) => {
  
  const formData = Object.fromEntries(data)
  const parsed = schema.safeParse(formData)

  if (!parsed.success){
    return {
      message: "Invalid form data",
      fields: parsed.data,
    };
  }

  try {
    const res = await serverRequest("/auth/login", config(formData));
    setSession(res)
    
    return {
      message: "success"
    }
  } catch (error: any) {
    return {
      message: "Error logging in",
      fields: parsed.data,
    };
  }
};
