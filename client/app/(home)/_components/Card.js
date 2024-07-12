"use client";
import Link from "next/link";
import { useState } from "react";
import { toggleState } from "@/app/_helpers/toggleState";
import { createSaved } from "@/app/_lib/queries/saved/createSaved";

export const Card = (fields) => {
  const { id, title, text, cost } = fields;

  return (
    <>
      <SavedButton id={id} />
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

export const SavedButton = ({ id }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = async () => {
    const x = id.toString()
    const res = await createSaved(x)
    toggleState(setIsSaved)
  }

  return isSaved ? (
    <>
      <div
        onClick={handleClick}
        className="absolute bg-white rounded-full p-[10px]"
      >
        <img src="/assets/heart_icon_filled.svg" />
      </div>
    </>
  ) : (
    <>
      <div
        onClick={handleClick}
        className="absolute bg-white rounded-full p-[10px]"
      >
        <img src="/assets/heart_icon.svg" />
      </div>
    </>
  );
};
