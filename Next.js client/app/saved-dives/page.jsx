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
  const saved_dives = session?.saved_dives;

  if (!!saved_dives)
    return (
      <>
          <div className="pb-[20px]">
            <div className="font-semibold text-[32px]">Saved Dives</div>
            <div className="text-xl">{saved_dives.length} total</div>
          </div>
          <DivesGallery data={saved_dives} />
      </>
    );

  return (
    <>
      {popup ? (
        <LoginScreen onClick={() => setPopup(false)} />
      ) : (
        <>
            <NotAuthPage
              title="Saved Dives"
              text="Log in to see your saved dives"
              onClick={() => setPopup(true)}
              buttonText="log in"
            />
        </>
      )}
    </>
  );
}
