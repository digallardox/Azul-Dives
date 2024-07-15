import Link from "next/link";

export const Appbar = () => {

  const links = {
    explorer: "/",
    saved: "/saved",
    reservations: "/reservations",
    profile: "/profile"
  }

  return (
    <>
      <div className={Styles.container}>
        <Link href={links.explorer} className={Styles.menuItems}>
          <img src="/icons/search_icon.svg" alt="search icon" />
          <div className={Styles.text}>Explore</div>
        </Link>

        <Link href={links.saved} className={Styles.menuItems}>
          <img src="/icons/heart_icon.svg" alt="heart icon" />
          <div className={Styles.text}>Saved</div>
        </Link>

        <Link href={links.reservations} className={Styles.menuItems}>
          <img src="/icons/scuba_icon.png" alt="scuba icon" />
          <div className={Styles.text}>Dives</div>
        </Link>

        <Link href={links.profile} className={Styles.menuItems}>
          <img src="/icons/profile_icon.svg" alt="profile icon" />
          <div className={Styles.text}>Profile</div>
        </Link>
      </div>
    </>
  );
};

export const Styles = {
  container:
    "fixed bottom-0 left-0 h-[75px] w-full bg-white border-x-0 border-t border-b-0 border-[#bfc8ca] flex gap-14 justify-center items-center",
  text: "text-[10px] text-[#3f484a]",
  menuItems: "flex flex-col items-center",
};
