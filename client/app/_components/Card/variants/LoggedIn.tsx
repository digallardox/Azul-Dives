"use client"
import Link from "next/link";
import { useState } from "react";

export const LoggedIn = ({ fields }: any) => {
  const [isSaved, setIsSaved] = useState(false)

  const { id, title, text, cost } = fields;

  return (
    <>
      {!!isSaved ? (
        <div
          onClick={() => setIsSaved((prevState) => !prevState)}
          className="absolute bg-white rounded-full p-[10px]"
        >
          <img src="/assets/heart_icon.svg" />
        </div>
      ) : (
        <div
          onClick={() => setIsSaved((prevState) => !prevState)}
          className="absolute bg-white rounded-full p-[10px]"
        >
          <img src="/assets/heart_icon_filled.svg" />
        </div>
      )}
      <Link href={`/dives/${id}`}>
        <div className="pb-[40px] cursor-pointer">
          <div className="w-[full] aspect-[10/10] bg-[#d9d9d9] rounded-[15px]" />

          <div className="pt-[10px]">
            <span className="text-lg font-semibold">{title}</span>
            <br />
            <span>{text}</span>
            <br />
            <span>
              <strong>${cost}</strong> per explorer
            </span>
            <br />
          </div>
        </div>
      </Link>
    </>
  );
};
