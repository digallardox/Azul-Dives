"use client";
import { deleteAuthToken } from "@/_helpers/authToken";

export const LogoutButton = () => {
  const handleLogout = async () => {
    const { success } = await deleteAuthToken()
    if (!!success){
        location.reload()
    }
  };

  return <button className="underline pt-[20px]" onClick={handleLogout}>Log out</button>;
};
