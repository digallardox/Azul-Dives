import serverRequest from "../apiConfig";
import { toJSON } from "@/app/_helpers/json";

export const updateDiver = async (id, keyValue) => {
  const body = {
    diver: keyValue
  };

  return await serverRequest(`/divers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(body),
  });
};
