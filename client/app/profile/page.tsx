"use client"

import NotAuthPage from "../components/layouts/NotAuthPage"
import LoginScreen from "../components/loginModal/LoginScreen"
import { useState } from "react";

export default function Login() {
  const [popup, setPopup] = useState(false)

  const jwt = localStorage.getItem("jwt") || null

  function handleLogout(){
    localStorage.removeItem("jwt")
    location.reload();
  }

  return !!jwt ?
  <>
    logged in!
    <button onClick={handleLogout}>
      log out
    </button>
  </>
  :
  <>
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
  </>

  }
  