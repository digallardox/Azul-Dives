import { cookies } from "next/headers";
import { LoggedIn } from "./variants/LoggedIn";
import { LoggedOut } from "./variants/LoggedOut";
import { checkToken } from "@/app/_lib/auth/checkToken";

const Card = async({ id, title, text, cost }) => {
  const token = await checkToken()
  const fields = { id, title, text, cost }
  if (!token) {
    return <LoggedOut fields={fields} />;
  }
  return <LoggedIn fields={fields} />
};

export default Card;
