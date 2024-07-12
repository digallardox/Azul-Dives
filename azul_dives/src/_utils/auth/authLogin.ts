"use server";
import { API_ENDPOINT } from "../api_config";
 
const paths = {
  login: "/auth/login",
  verify: "/auth/verify",
};

export const authLogin = async (credentials: any) => {

  const url = API_ENDPOINT(paths.login);
  console.log(url);

  const body = JSON.stringify(credentials);
  try {
    const res = await fetch(API_ENDPOINT(paths.login), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    if (!res.ok)
      return {
        success: false,
        message: `Response failed: ${res.status}`,
      };
    const data = await res.json();
    return data;
  } catch (err: any) {
    return {
      success: false,
      message: `Fetch request failed: ${err.message}`,
    };
  }
};
