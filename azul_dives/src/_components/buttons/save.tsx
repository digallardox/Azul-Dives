"use client";
import { useState } from "react";

export const SaveButton = ({state}: any = true) => {
  const [saved, setSaved] = useState<boolean>(state);

  const handleClick = async () => {
    setSaved(prevState => !prevState)
  };

  if (!saved) {
    return (
      <>
        <div className={Styles.container} onClick={handleClick}>
          <img className={Styles.heartIcon} src="/icons/heart_icon.svg" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className={Styles.container} onClick={handleClick}>
        <img className={Styles.heartIcon} src="/icons/heart_icon_filled.svg" />
      </div>
    </>
  );
};

export const SaveButtonOutline = () => {
  return (
    <>
      <div className={Styles.container}>
        <img className={Styles.heartIcon} src="/icons/heart_icon.svg" />
      </div>
    </>
  );
};

export const SaveButtonFilled = () => {
  return (
    <>
      <div className={Styles.container}>
        <img className={Styles.heartIcon} src="/icons/heart_icon_filled.svg" />
      </div>
    </>
  );
};

const Styles = {
  container:
    "mt-[10px] bg-white rounded-full w-[40px] h-[40px] absolute right-10 flex items-center justify-center",
  heartIcon: "",
};
