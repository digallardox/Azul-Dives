"use client"

import Button from "../buttons/Primary Button/Button";
import { handleLogin } from "@/app/services/queries";
import { useState } from "react";


const LoginForm = () => {
    const [login, setLogin] = useState({email: "", password: ""})

    const handleChange = (e) => {
      const { name, value } = e.target;
          setLogin((prevState) => ({
              ...prevState,
              [name]: value,
          }));
      }

return (
    <>
    <div id="login">
    <span className="font-semibold text-2xl">Log in</span>
    <div className="flex flex-col items-center justify-center ">
                <form
                className="w-[460px] border rounded-xxl">
                    <input className="px-[20px] w-full h-[80px] block h-[20px] border" 
                    value={login.email}
                    name="email"
                    onChange={handleChange}
                    type="text" />
                    
                    <input className="px-[20px] w-full h-[80px] block h-[20px] border"
                    value={login.password}
                    name="password"
                    onChange={handleChange}
                    type="text" />
                </form>
                <Button
                onClick={() => handleLogin(login)}
                text="Log in" 
                />
                </div>
        </div>
    </>
)

}

export default LoginForm;