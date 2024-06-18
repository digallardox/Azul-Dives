"use client";
import React, { createContext, useState, useEffect } from "react";

const SessionContext = createContext()

export const SessionProvider = ({
  children,
}) => {
  const [session, setSession] = useState({});

  useEffect(() => {
    const sessionData = localStorage.getItem("session_data") || null
    if (!!sessionData) setSession(JSON.parse(sessionData))
  }, []);

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
