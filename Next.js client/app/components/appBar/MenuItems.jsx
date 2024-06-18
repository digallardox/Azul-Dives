"use client"

import { useContext } from "react";
import SessionContext from "@/app/context/SessionContext";
import Link from "next/link";

const MenuItems = () => {
  const { session } = useContext(SessionContext) || null
  const { token } = session

  return (
    <>
      <span id="explore">
        <Link href="/" id="explore" className={Styles.menuItems}>
          <img src="/assets/search_icon.svg" alt="search icon" />
          <div className={Styles.text}>Explore</div>
        </Link>
      </span>

      <span id="saved-dives">
        <Link href="/saved-dives" id="saved" className={Styles.menuItems}>
          <img src="/assets/heart_icon.svg" alt="heart icon" />
          <div className={Styles.text}>Saved</div>
        </Link>
      </span>

      <span id="my-dives">
        <Link href="/my-dives" id="dives" className={Styles.menuItems}>
          <img src="/assets/scuba_icon.png" alt="scuba icon" />
          <div className={Styles.text}>Dives</div>
        </Link>
      </span>

      {!!token ? (
        <span id="profile">
          <Link href="/profile" id="login" className={Styles.menuItems}>
            <img src="assets/profile_icon.svg" alt="profile icon" />
            <div className={Styles.text}>Profile</div>
          </Link>
        </span>
      ) : (
        <span id="profile">
          <Link href="/profile" id="login" className={Styles.menuItems}>
            <img src="assets/profile_icon.svg" alt="profile icon" />
            <div className={Styles.text}>Login</div>
          </Link>
        </span>
      )}
    </>
  );
};

const Styles = {
  container:
    "fixed bottom-0 left-0 h-[75px] w-full bg-white border-x-0 border-t border-b-0 border-[#bfc8ca] flex gap-14 justify-center items-center",
  text: "text-[10px] text-[#3f484a]",
  menuItems: "flex flex-col items-center",
};


export default MenuItems;