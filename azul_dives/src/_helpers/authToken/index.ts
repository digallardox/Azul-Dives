"use server"
import { cookies } from "next/headers";

const authToken = "authToken";

export const getAuthToken = () => {
  const cookieStore = cookies();
  try {
    const res = cookieStore.get(authToken);
    return res;
  } catch (err) {
    return {
      success: false,
      message: `Error getting authToken`,
    };
  }
};

export const setAuthToken = async (value: string) => {
  const cookieStore = cookies();
  try {
    cookieStore.set(authToken, value);
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
  const cookieStore = cookies();
  try {
    cookieStore.delete(authToken);
  } catch (err) {
    return {
      success: false,
      message: `Error deleting authToken`,
    };
  }
};
