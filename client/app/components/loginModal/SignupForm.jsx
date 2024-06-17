"use client"

import Button from "@/app/components/buttons/Primary Button/Button";
import { handleSignup } from "@/lib/queries";
import { useState } from "react";


const SignupForm = () => {
    const [signup, setSignup] = useState({email: "", password: ""})

    const handleChange = (e) => {
      const { name, value } = e.target;
          setSignup((prevState) => ({
              ...prevState,
              [name]: value,
          }));
      }

return (
    <>
           <div id="signup">
                <span className="font-semibold text-2xl">Sign up</span>
                <div className="flex flex-col items-center justify-center ">
                <form
                className="w-[460px] border rounded-xxl">
                    <input className="px-[20px] w-full h-[80px] block h-[20px] border" 
                    value={signup.email}
                    name="email"
                    onChange={handleChange}
                    type="text" />

                    <input className="px-[20px] w-full h-[80px] block h-[20px] border"
                    value={signup.password}
                    name="password"
                    onChange={handleChange}
                    type="text" />
                </form>
                <Button
                onClick={() => handleSignup(signup)}
                text="Create account" 
                />
                </div>
                </div>
    </>
)

}

export default SignupForm;