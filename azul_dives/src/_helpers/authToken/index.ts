"use server"
import { cookies } from "next/headers";

const authToken = "authToken";

type ReturnType = {
  authorized: boolean,
  message?: string
  authToken?: string
}

export const getAuthToken = async (): Promise<ReturnType> => {
  try {
    const res = cookies().get(authToken);
    if (!res) {
      return {
        authorized: false,
        message: "Cookie was undefined"
      }
    }
    return {
      authorized: true,
      authToken: res.value
    }
  } catch (err) {
    return {
      authorized: false,
      message: `Error getting authToken`,
    };
  }
};

export const setAuthToken = async (value: string) => {
  try {
    cookies().set(authToken, value);
    return {
      success: true,
      message: "Successfully set authToken cookie"
    }
  } catch (err: any) {
    return {
      success: false,
      message: `Error setting authToken: ${err.message}`,
    };
  }
};

export const deleteAuthToken = async () => {
  try {
    cookies().delete(authToken);
  } catch (err) {
    return {
      success: false,
      message: `Error deleting authToken`,
    };
  }
};
