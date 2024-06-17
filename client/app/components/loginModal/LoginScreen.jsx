"use client"
import { CloseButton } from "@/app/components/buttons/Close Buttons/index"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import BackDrop from "../BackDrop"


const LoginScreen = ({onClick}) => {
return (
    <>
      <BackDrop>
        <CloseButton onClick={onClick} />
          <LoginForm />
          <SignupForm />
      </BackDrop>
    </>
)
}

export default LoginScreen;