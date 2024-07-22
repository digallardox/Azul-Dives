"use server";
import { API_ENDPOINT } from "../api_config";

const paths = {
  verify: "/auth/verify",
};

export const authVerify = async (token: any) => {
  try {
    const res = await fetch(API_ENDPOINT(paths.verify), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok)
      return {
        success: false,
        message: `Verificatoin request failed with status: ${res.status} ${res.statusText}`,
      };

    const data = await res.json();
    if (data && data.id)
      return {
        success: true,
      };
  } catch (err: any) {
    return {
      success: false,
      message: `Error verifying token ${err.message}`,
    };
  }
};
