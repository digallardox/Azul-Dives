"use client"
import NotAuthPage from "../components/Layouts/NotAuthPage"
import LoginScreen from "../components/login/Login";
import { useState } from "react";

export default function Dives() {
  const [popup, setPopup] = useState(false)
    return (
      <>
      {popup ? <LoginScreen onClick={() => setPopup(false)} />
      :
      <>
      <NotAuthPage
        title="Upcoming Dives"
        text="Log in to see your planned dives"
        onClick={() => setPopup(true)}
        buttonText="log in"
        />
      </>
      }
      </>
    );
  }
  