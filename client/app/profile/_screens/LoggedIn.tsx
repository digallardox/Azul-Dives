import { LogoutButton } from "../_components/LogoutButton";
import { getDiver } from "@/app/_lib/queries/getDiver";
import { getUserID } from "@/app/_lib/auth/getUserID";
import { FormTemplate } from "../_components/FormTemplate";

export const LoggedIn = async () => {
  const id = await getUserID();
  const { diver } = await getDiver(id) || null
  const { first_name, last_name, username } = diver || null

  return (
    <>
      <div className="font-semibold text-[32px]">
        Hello, {first_name} {last_name}
      </div>
      <FormTemplate label="First name" value={first_name} />
      <FormTemplate label="Last name" value={last_name} />
      <FormTemplate label="Username" value={username} />
      <LogoutButton />
    </>
  );
};
