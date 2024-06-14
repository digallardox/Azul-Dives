"use client"
import NotAuthPage from "../components/Layouts/NotAuthPage"
import LoginScreen from "../components/login/Login";
import { useState } from "react";

export default function Saved() {
const [popup, setPopup] = useState(false)

    return (
      <>
      {popup ? <LoginScreen onClick={() => setPopup(false)} /> : null }
        <NotAuthPage
        title="Saved Dives"
        text="Log in to see your saved dives"
        onClick={() => setPopup(true)}
        buttonText="log in"
        />
      </>
    );
  }
  