import { cookies } from "next/headers";
import { LoggedOut } from "./variants/loggedOut";
import { Explorer } from "./variants/explorer";
import { Guide } from "./variants/guide";

const AppBar = () => {
  const cookieStore = cookies();
  const context = cookieStore.get("context")?.value
  
  switch (context) {
    case "explorer":
     return <Explorer />
    case "guide":
      return <Guide />
    default:
      return <LoggedOut />
  }
};

export default AppBar;
