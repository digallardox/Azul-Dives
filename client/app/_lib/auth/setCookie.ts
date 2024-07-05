import { cookies } from "next/headers";

export const setCookie = (key: any, data: any) => {
  try {
    cookies().set(key, data);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
