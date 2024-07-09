import serverRequest from "../apiConfig";
import { cookies } from "next/headers";

export const getDiver = async (id: string | number) => {
  const token = cookies().get("token")
  
  const res = await serverRequest(`/divers/${id}`, {
    headers: {
      "Authorization": `Bearer ${token?.value}`
    },

  });
  return res;
};
