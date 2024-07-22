import Link from "next/link";
import { checkToken } from "../_lib/auth/checkToken";
import { LoggedIn } from "./_screens/LoggedIn"
import { LoggedOut } from "./_screens/LoggedOut"

const MyDives = async () => {
  const token = await checkToken()

  return !token ? <LoggedOut /> : <LoggedIn />
}

export default MyDives;
