"use client";
import NotAuthPage from "@/app/components/layouts/NotAuthPage";
import LoginScreen from "@/app/components/layouts/NotAuthPage.jsx";
import { useState } from "react";

export default function Dives() {
  const [popup, setPopup] = useState(false);
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
