import { parseJSON } from "./json";

export const getUser = async () => {
     const res = await fetch("/api/auth/get-user");
     const { id } = await parseJSON(res)
     return id
}