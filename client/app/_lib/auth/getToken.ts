"use server";
import { cookies } from "next/headers";

export const getUserID = () => {
  const diver = cookies().get("diver");
  return !!diver ? diver!.value : ""
};
