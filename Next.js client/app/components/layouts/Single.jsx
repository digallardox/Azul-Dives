"use client";
import { useRouter } from "next/navigation";
import { SaveButton } from "@/app/components/buttons/saveButtons/index";
import { useContext } from "react";
import SessionContext from "@/app/context/SessionContext";

const Single = ({ title, text, cost, id }) => {
  const router = useRouter();
    const { session } = useContext(SessionContext);
    const token = session?.token

  function handleClick() {
    router.push(`/dives/${id}`);
  }

  if (!!token) return (
    <>
      <div className="pb-[40px] cursor-pointer">
        <SaveButton style="absolute" />
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
    </>
  );

        return (
          <>
            <div onClick={handleClick} className="pb-[40px] cursor-pointer">
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
          </>
        );
    }

export default Single;
