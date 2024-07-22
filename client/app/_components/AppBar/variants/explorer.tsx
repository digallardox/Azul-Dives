import Link from "next/link";
import { Styles } from "./Styles";

export const Explorer = () => {
  return (
    <>
      <div className={Styles.container}>
        <Link href="/" id="explore" className={Styles.menuItems}>
          <img src="/assets/search_icon.svg" alt="search icon" />
          <div className={Styles.text}>Explore</div>
        </Link>

        <Link href="/saved-dives" id="saved" className={Styles.menuItems}>
          <img src="/assets/heart_icon.svg" alt="heart icon" />
          <div className={Styles.text}>Saved</div>
        </Link>

        <Link href="/my-dives" id="dives" className={Styles.menuItems}>
          <img src="/assets/scuba_icon.png" alt="scuba icon" />
          <div className={Styles.text}>Dives</div>
        </Link>

        <Link href="/profile" id="login" className={Styles.menuItems}>
          <img src="assets/profile_icon.svg" alt="profile icon" />
          <div className={Styles.text}>Profile</div>
        </Link>
      </div>
    </>
  );
};
