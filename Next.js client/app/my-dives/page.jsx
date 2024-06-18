"use client";
import NotAuthPage from "@/app/components/layouts/NotAuthPage";
import LoginScreen from "@/app/components/layouts/NotAuthPage.jsx";
import { useState, useContext } from "react";
import SessionContext from "@/app/context/SessionContext";

export default function Dives() {
  const [popup, setPopup] = useState(false);
  const { session } = useContext(SessionContext) || null;
  const token = session?.token

  if (!!token) {
    return (
      <>
          <div className="font-semibold text-[32px]">Upcoming Dives</div>
      </>
    );
  }


  return (
    <>
      {popup ? (
        <LoginScreen onClick={() => setPopup(false)} />
      ) : (
        <>
          <NotAuthPage
            title="Upcoming Dives"
            text="Log in to see your planned dives"
            onClick={() => setPopup(true)}
            buttonText="log in"
          />
        </>
      )}
    </>
  );
}
