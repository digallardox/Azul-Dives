import { cookies } from "next/headers";

export const getCookie = (key: string) => {
  const cookieStore = cookies();
  try {
    const res = cookieStore.get(key);
    console.log(res);
    return res;
  } catch (err) {
    return {
      success: false,
      // probably should not return the value
      message: `Error getting cookie: ${key}`,
    };
  }
};

export const setCookie = (key: string, value: string) => {
  const cookieStore = cookies();
  try {
    const res = cookieStore.set(key, value);
    console.log(res);
  } catch (err) {
    return {
      success: false,
      // probably should not return the value
      message: `Error setting cookie: ${key}:${value}`,
    };
  }
};

export const deleteCookie = (cookie: string) => {
  const cookieStore = cookies();
  try {
    const res = cookieStore.delete(cookie);
    console.log(res);
  } catch (err) {
    return {
      success: false,
      message: `Error deleting cookie: ${cookie}`,
    };
  }
};

