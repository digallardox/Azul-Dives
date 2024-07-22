"use client";
import NotAuthPage from "../components/layouts/NotAuthPage";
import LoginScreen from "../components/loginModal/LoginScreen";
import { useState } from "react";
import SessionContext from "@/app/context/SessionContext";
import Information from "@/app/components/layouts/Information";
import Link from "next/link";
import SwitchButton from "@/app/components/buttons/SwitchButton"

export default function Login() {
  const [popup, setPopup] = useState(false);

  function handleLogout() {
    localStorage.removeItem("session_data");
    window.location.href = "/";
  }

  if (!!token)
    return (
      <>
          <div id="header" className="flex items-center gap-[10px] pb-[20px]">
            <span className="bg-[#D4D4D4] h-[50px] w-[50px] rounded-full flex p-[10px]">
              <img src="/assets/profile_icon.svg" />
            </span>
            <span className="text-2xl font-semibold">
              Hello, {diver.first_name}
            </span>
          </div>
          <>
            <div>
              <span className="font-semibold text-2xl">Settings</span>
              <Information title="Username" value={diver.email} />
              <Information title="First name" value={diver.first_name} />
              <Information title="Last name" />
              <Information title="Email" />
              <Information title="Dive level" />
              <button onClick={handleLogout} className="underline">
                Log out
              </button>
              <div className="flex justify-center pt-[20px]">
              <SwitchButton uri="profile" context="explore" />
              </div>
            </div>
          </>
      </>
    );

}
