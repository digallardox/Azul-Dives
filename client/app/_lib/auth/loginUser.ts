"use server"
import serverRequest from "../apiConfig";
import { Credentials } from "@/types/apiTypes";
import { toJSON } from "@/app/_helpers/json";
import { setSession } from "./setSession";

const config = (credentials: Credentials) => {
  const body = toJSON({
    login: {
      username: credentials.username,
      password: credentials.password,
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

export const loginUser = async (credentials: Credentials) => {
  try {
    const res = await serverRequest("/auth/login", config(credentials));
    setSession(res)
  } catch (error: any) {
    console.error(`Error logging in user = ${error.message}`);
  }
};
