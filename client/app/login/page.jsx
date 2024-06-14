"use client"

import NotAuthPage from "../components/Layouts/NotAuthPage"
import LoginScreen from "../components/login/Login"
import { useState } from "react";

export default function Login() {
  const [popup, setPopup] = useState(false)

    return (
      <>
      {popup ? <LoginScreen onClick={() => setPopup(false)} /> : null }
        <NotAuthPage
        title="Hello, Explorer"
        text="Log in to start planning your next adventure"
        onClick={() => setPopup(true)}
        buttonText="log in"
        />
      </>
    );
  }
  