"use client";
import { useState } from "react";
import { deleteSavedDive, saveDive } from "@/_utils/queries";
import { useSession } from "@/sessionProvider";

type ButtonProps = {
    state: boolean,
    id: number
}
export const SaveButton = ({ state = true, id }: ButtonProps) => {
  
  const [saved, setSaved] = useState<boolean>(state);

  const handleClick = async () => {
    if (saved === true){
        deleteSavedDive(id)
        console.log("removing saved", id)

    } else if (saved == false) {
        saveDive(id)
        console.log("adding to saved", id)
    }
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

// export const SaveButtonOutline = () => {
//   return (
//     <>
//       <div className={Styles.container}>
//         <img className={Styles.heartIcon} src="/icons/heart_icon.svg" />
//       </div>
//     </>
//   );
// };

// export const SaveButtonFilled = () => {
//   return (
//     <>
//       <div className={Styles.container}>
//         <img className={Styles.heartIcon} src="/icons/heart_icon_filled.svg" />
//       </div>
//     </>
//   );
// };

const Styles = {
  container:
    "mt-[10px] bg-white rounded-full w-[40px] h-[40px] absolute right-10 flex items-center justify-center",
  heartIcon: "",
};
