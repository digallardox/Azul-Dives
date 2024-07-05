"use client"
export const LogoutButton = () => {

    const handleLogout = async () => {
        await fetch(
          "https://urban-couscous-595jw7gwj6wc44wv-3001.app.github.dev/api/auth/clear-session", {
            method: "DELETE"
          }
        );
        location.reload()
    }
  return (
    <>
      <button onClick={handleLogout}>logout</button>
    </>
  );
};
