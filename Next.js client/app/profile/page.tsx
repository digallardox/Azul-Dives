"use client";
import NotAuthPage from "../components/layouts/NotAuthPage";
import LoginScreen from "../components/loginModal/LoginScreen";
import { useState, useContext } from "react";
import SessionContext from "@/app/context/SessionContext";
import Information from "@/app/components/layouts/Information"

export default function Login() {
  const [popup, setPopup] = useState(false);
  const { isAuthorized, diver } = useContext(SessionContext) || null

  function handleLogout() {
    localStorage.removeItem("jwt");
    window.location.href = "/";
  }

  if ( !!isAuthorized) return (
    <>
      <div className="px-[20px] pt-[100px]">
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
              <button className="block bg-black text-white h-[50px] w-[225px] rounded-full flex items-center justify-center gap-[5px]">
                <img src="/assets/change_icon.svg" />
                <span>Switch to Guiding</span>
              </button>
            </div>
          </div>
        </>
      </div>
    </>
  ); 
  
  return (
    <>
      <>
        {popup ? (
          <LoginScreen onClick={() => setPopup(false)} />
        ) : (
          <>
            <div className="px-[20px] pt-[100px]">
              <NotAuthPage
                title="Hello, Explorer"
                text="Log in to start planning your next adventure"
                onClick={() => setPopup(true)}
                buttonText="log in"
              />
            </div>
          </>
        )}
      </>
    </>
  );
}