"use client";
import { useRouter } from "next/navigation";
import { clearSession } from "@/app/_lib/auth/clearSession";

export const LogoutButton = () => {
  const router = useRouter()

  const handleLogout = () => {
    fetch(
      "https://urban-couscous-595jw7gwj6wc44wv-3001.app.github.dev/api/auth/clear-session",
      {
        method: "DELETE",
      }
    );
    router.push("/")
  };
  return (
    <>
      <button 
      className="underline pt-[40px] text-lg"
      onClick={handleLogout}>Log out</button>
    </>
  );
};
