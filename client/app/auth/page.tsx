"use client"
import { useRouter } from "next/navigation";
import AuthForm from "../components/AuthForm";
import { loginUser } from "../lib/auth/loginUser";
import { createDiver } from "../lib/queries/createDiver";

export default function Auth(){
    const router = useRouter()
    const handleGoBack = () => {
      router.back();
    };

    return (
      <>
        <button onClick={handleGoBack}>Go Back</button>
        <AuthForm type="Log in" onSubmit={loginUser} />
        <AuthForm type="Sign up" onSubmit={createDiver} />
      </>
    );
}