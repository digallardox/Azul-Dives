"use client";
import { getSaved } from "@/app/_lib/queries/saved/getSaved";
import { useEffect, useState } from "react";
import { getUserID } from "@/app/_lib/auth/getUserID";
import Link from "next/link";
import { deleteSaved } from "@/app/_lib/queries/saved/deleteSaved";

export const LoggedIn = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const handleData = async () => {
      const id = await getUserID();
      const res = await getSaved(id);
      setSaved(res);
    };
    handleData();
  }, []);

  const handleClick = async (id: any) => {
    setSaved((prevState) => prevState.filter((saved) => saved.id !== id));
    try {
      deleteSaved(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="font-semibold text-[32px]">Saved Dives</div>
      <span>{saved.length} total</span>
      <>
        <div className="pb-[60px]">
          {saved.map((dive_spot: any) => (
            <>
              <div
                key={dive_spot.dive_spot.id}
                onClick={() => handleClick(dive_spot.id)}
                className="absolute bg-white rounded-full p-[10px]"
              >
                <img
                  className="cursor-pointer"
                  src="/assets/heart_icon_filled.svg"
                />
              </div>
              <Link href={`/dives/${dive_spot.dive_spot.id}`}>
                <div className="pb-[40px] cursor-pointer">
                  <div className="w-[full] aspect-[10/10] bg-[#d9d9d9] rounded-[15px]" />
                  <div className="pt-[10px]">
                    <span className="text-lg font-semibold">
                      {dive_spot.dive_spot.name}
                    </span>
                    <br />
                    <span>{dive_spot.dive_spot.description}</span>
                    <br />
                    <span>
                      <strong>${dive_spot.dive_spot.price}</strong> per explorer
                    </span>
                    <br />
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </>
    </>
  );
};
