"use client";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { getSavedDiveSpots } from "./_utils/queries";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    const getSavedDives = async () => {
      const res = await getSavedDiveSpots();
      setSaved(res);
    };

    if (saved === null) {
      getSavedDives();
    }
  }, [saved]);

  return (
    <>
      <SessionContext.Provider value={{ saved, setSaved }}>
        {children}
      </SessionContext.Provider>
    </>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
