"use client";
import NotAuthPage from "@/app/components/layouts/NotAuthPage";
import LoginScreen from "@/app/components/loginModal/LoginScreen";
import { useState } from "react";
import { useContext } from "react";
import SessionContext from "@/app/context/SessionContext";
import DivesGallery from "@/app/components/layouts/DivesGallery";

export default function Saved() {
  const [popup, setPopup] = useState(false);

  const { session } = useContext(SessionContext) || null;
  const { saved_dives } = session

  if (!!saved_dives)
    return (
      <>
        <div className="px-[20px] pt-[100px]">
          <div className="pb-[20px]">
            <div className="font-semibold text-[32px]">Saved Dives</div>
            <div className="text-xl">{saved_dives.length} total</div>
          </div>
          <DivesGallery data={saved_dives} />
        </div>
      </>
    );

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
