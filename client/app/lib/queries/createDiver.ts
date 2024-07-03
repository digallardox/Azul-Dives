import serverRequest from "../apiConfig";
import { Credentials } from "@/types/apiTypes";
import { toJSON } from "@/app/helpers/json";

export const createDiver = async (credentials: Credentials) => {
  const body = {
    diver: {
      username: credentials.username,
      password: credentials.password,
    },
  }

  return await serverRequest("/divers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(body),
  });
};
