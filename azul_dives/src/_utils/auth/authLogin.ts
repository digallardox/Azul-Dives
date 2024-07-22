"use server";
import { API_ENDPOINT } from "../api_config";
import { authVerify } from "./authVerify";

const paths = {
  login: "/auth/login",
};


export const authLogin = async (credentials: any) => {
  const body = JSON.stringify(credentials);
  try {
    const res = await fetch(API_ENDPOINT(paths.login), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
      cache: "no-store",
    });

    if (!res.ok)
      return {
        success: false,
        message: `authLogin request failed: ${res.status} ${res.statusText}`,
      };

    const data = await res.json();

    if (!data || !data.token)
      return {
        success: false,
        message: "authLogin request recieved a response but there was not a body or token",
      };

    return {
      success: true,
      token: data.token
    };

  } catch (err: any) {
    return {
      success: false,
      message: `authLogin catch block - request failed: ${err.message}`,
    };
  }
};
