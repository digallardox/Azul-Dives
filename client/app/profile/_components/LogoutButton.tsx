"use client";

export const LogoutButton = () => {
  const handleLogout = () => {
    fetch(
      "https://urban-couscous-595jw7gwj6wc44wv-3001.app.github.dev/api/auth/clear-session",
      {
        method: "DELETE",
      }
    );
    location.reload();
  };
  return (
    <>
      <button 
      className="underline pt-[40px] text-lg"
      onClick={handleLogout}>Log out</button>
    </>
  );
};
