"use client"
import { LogoutButton } from "./buttons/logout";

export const ProfileForm = ({ user }: any) => {
  const { first_name, last_name, username } = user;
  const fullName = `${first_name} ${last_name}`;

  return (
    <>
      <div className="flex items-center justify-between pb-[20px]">
        <div className="pt-[20px]">
          <label className="font-semibold">Legal name</label>
          <br />
          <input name="name" value={fullName} />
        </div>
        <div className="underline cursor-pointer">Edit</div>
      </div>
      <hr />

      <div className={Styles.flexParent}>
        <div className="pt-[20px]">
          <label className="font-semibold">Username</label>
          <br />
          <input name="name" value={username} />
        </div>
        <div className="underline cursor-pointer">Edit</div>
      </div>
      <hr />
      <LogoutButton />
    </>
  );
};

const Styles = {
  flexParent: "flex items-center justify-between pb-[20px]",
};
