"use client";
import { useState } from "react";

export const SaveButton = ({ style }) => {
  const [isSaved, setIsSaved] = useState(false);

  function handleClick() {
    setIsSaved((prevState) => !prevState);
  }

  return isSaved ? (
    <>
      <button
        onClick={handleClick}
        className={`w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center ${style}`}
      >
        <img src="/assets/heart_icon.svg" alt="save button" />
      </button>
    </>
  ) : (
    <>
      <button
        onClick={handleClick}
        className={`w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center ${style}`}
      >
        <img src="/assets/heart_icon_filled.svg" alt="save button" />
      </button>
    </>
  );
};
