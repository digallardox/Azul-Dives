import serverRequest from "../apiConfig";
import { Credentials } from "@/types/apiTypes";
import { toJSON } from "@/app/helpers/json";

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
    return await serverRequest("/auth/login", config(credentials));
  } catch (error: any){
    console.error(`Error logging in user = ${error.message}`)
  }
};
