"use client"
import { createContext, useContext, useState } from "react";

const SessionContext = createContext()

export const SessionProvider = ({ children }) => {
    const [saved, setSaved] = useState([])

    return (
        <>
        <SessionContext.Provider value={{ saved, setSaved }}>
            {children}
        </SessionContext.Provider>
        </>
    )
}

export const useSession = () => {
  return useContext(SessionContext);
}
