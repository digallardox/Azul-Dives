import { loginUser } from "../lib/auth/loginUser";
import Link from "next/link";

const Profile = async () => {
  const credentials = {
    username: "meekmill",
    password: "lalalalalala3e2q",
  };
  const res = await loginUser(credentials);

  return (
    <>
      <div>
        <span className="font-semibold text-[32px]">Hello, Explorer</span>
        <div className="pt-[60px]">
          <span className="font-semibold text-[32px]">Log in to start planning your next dive</span>
          <br />
          <Link href="/auth">
          Log in
          </Link>
        </div>
      </div>
    </>
  );

};

export default Profile;

// "use client";
// import Button from "../buttons/Primary Button/Button";
// import LoginScreen from "../loginModal/LoginScreen";
// import { useState } from "react";

// const NotAuthPage = ({ title, text }) => {
//   const [popup, setPopup] = useState(false);

//   if (!!popup) {
//     return (
//       <LoginScreen onClick={() => setPopup(false)} />
//     )
//   } else {
//     return (
//       <>
//       <div>
//         <span className="font-semibold text-[32px]">{title}</span>
//         <div className="pt-[60px]">
//           <span className="font-semibold text-[32px]">{text}</span>
//           <br />
//           <Button onClick={() => setPopup(true)} text="log in" />
//         </div>
//       </div>
//     </>
//     )
//   }
// };

// export default NotAuthPage;