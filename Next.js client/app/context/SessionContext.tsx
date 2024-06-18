"use client";
import React, { createContext, useState, useEffect } from "react";

type Diver = {
  first_name: string,
  email: string
}

type SessionContextType = {
  isAuthorized: boolean,
  diver: Diver;
}

const defaultDiver = {
  first_name: "",
  email: "",
};

const defaultContextValue: SessionContextType = {
  isAuthorized: false,
  diver: defaultDiver,
};

const SessionContext = createContext<SessionContextType>(defaultContextValue);

type Context = "logged out" | "diver" | "guide"

export const SessionProvider = ({ children }: any) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [diver, setDiver] = useState(defaultDiver)
  const [context, setContext] = useState<Context>("logged out")

  useEffect(() => {
    const jwt = localStorage.getItem("jwt") || null
    if (!!jwt) setIsAuthorized(true)

    const diver = localStorage.getItem("diver") || null
    if (!!diver) setDiver(JSON.parse(diver))

  }, []);

  return (
    <SessionContext.Provider value={{ isAuthorized, diver }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
