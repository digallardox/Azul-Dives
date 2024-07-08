"use client";
import Link from "next/link";
import { useState } from "react";
import { toggleState } from "@/app/_helpers/toggleState";

export const LoggedIn = ({ fields }: any) => {
  const [isSaved, setIsSaved] = useState(false);

  const { id, title, text, cost } = fields;
  // get saved dive id
  // make delet request

  const getData = async () => {
    const res = await fetch(
      `https://urban-couscous-595jw7gwj6wc44wv-3000.app.github.dev/divers/5/saved_dive_spots/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  return (
    <>
      {!!isSaved ? (
        <div
          onClick={() => toggleState(setIsSaved)}
          className="absolute bg-white rounded-full p-[10px]"
        >
          <img src="/assets/heart_icon.svg" />
        </div>
      ) : (
        <div
          onClick={() => toggleState(setIsSaved)}
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
