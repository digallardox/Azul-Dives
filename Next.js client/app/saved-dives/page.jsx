"use client";
import NotAuthPage from "@/app/components/layouts/NotAuthPage";
import LoginScreen from "@/app/components/loginModal/LoginScreen";
import { useState } from "react";

export default function Saved() {
  const [popup, setPopup] = useState(false);

  return (
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
  );
}
