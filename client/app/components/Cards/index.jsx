import { cookies } from "next/headers";
import { LoggedIn } from "./variants/LoggedIn";
import { LoggedOut } from "./variants/LoggedOut";

const Card = ({ id, title, text, cost }) => {
  const cookieStore = cookies();
  const context = cookieStore.get("context")?.value || null;

  const fields = { id, title, text, cost }

  switch (context) {
    case "explorer":
      return <LoggedIn fields={fields} />;
    case "guide":
      return <LoggedIn fields={fields} />;
    default:
      return <LoggedOut fields={fields} />;
  }
};

export default Card;
