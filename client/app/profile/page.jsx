import Link from "next/link";
import { checkToken } from "../_lib/auth/checkToken";
import { LogoutButton } from "./_components/LogoutButton";

const Profile = async () => {
  const token = await checkToken();

  if (token) {
    return (
      <>
        <span className="font-semibold text-[32px]">Hello, Explorer</span>
        <LogoutButton />
      </>
    );
  }

  return (
    <>
      <div>
        <span className="font-semibold text-[32px]">Hello, Explorer</span>
        <div className="pt-[60px]">
          <span className="font-semibold text-[32px]">
            Log in to start planning your next dive
          </span>
          <br />
          <Link href="/auth">Log in</Link>
        </div>
      </div>
    </>
  );
};

export default Profile;