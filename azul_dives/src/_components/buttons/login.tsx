"use client"
import { authLogin } from "@/_utils/auth/authLogin";
import { setAuthToken } from "@/_helpers/authToken";

export const LoginButton = () => {
    const handleLogin = async () => {
            const body = {
              auth: {
                username: "diego",
                password: "Sharkyshark",
              },
            };
            const res = await authLogin(body)
            setAuthToken(res.token)
    }

    return (
      <button
        className="w-[100px] h-[50px] inline-flex items-center justify-center bg-black rounded-md text-white"
        onClick={handleLogin}
      >
        Login
      </button>
    );
}