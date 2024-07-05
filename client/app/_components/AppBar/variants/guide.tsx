import Link from "next/link";
import { Styles } from "./Styles";

export const Guide = () => {
  return (
    <>
      <div className={Styles.container}>
        <Link href="/" className={Styles.menuItems}>
          <img src="/assets/ticket_icon.svg" alt="ticket icon" />
          <div className={Styles.text}>Reservations</div>
        </Link>

        <Link href="/saved-dives" className={Styles.menuItems}>
          <img src="/assets/wave_icon.svg" alt="wave icon" />
          <div className={Styles.text}>Listings</div>
        </Link>

        <Link href="/my-dives" className={Styles.menuItems}>
          <img src="/assets/dollar_icon.svg" alt="dollar icon" />
          <div className={Styles.text}>Earnings</div>
        </Link>

        <Link href="/profile" className={Styles.menuItems}>
          <img src="assets/profile_icon.svg" alt="profile icon" />
          <div className={Styles.text}>Profile</div>
        </Link>
      </div>
    </>
  );
};
