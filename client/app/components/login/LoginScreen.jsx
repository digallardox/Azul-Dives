"use client"

import { CloseButton } from "../buttons/Close Buttons/index"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"


const LoginScreen = ({onClick}) => {

return (
    <>
      <div className="absolute bottom-0 left-0 rounded-t-[30px] w-screen h-[850px] bg-white px-[20px] pt-[20px]" >
        <CloseButton onClick={onClick} />

          <LoginForm />
          <SignupForm />
        </div>
      <div className="w-screen h-screen bg-black/[0.20]" />
    </>
)

}

export default LoginScreen;