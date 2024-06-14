"use client"
import NotAuthPage from "../components/Layouts/NotAuthPage"
import LoginScreen from "../components/login/LoginScreen";
import { useState } from "react";

export default function Saved() {
const [popup, setPopup] = useState(false)

    return (
      <>
      {popup ? <LoginScreen onClick={() => setPopup(false)} /> 
      : 
      <>
      <NotAuthPage
        title="Hello, Explorer"
        text="Log in to start planning your next adventure"
        onClick={() => setPopup(true)}
        buttonText="log in"
        />
      </> 
      }
      </>
    );
  }
  