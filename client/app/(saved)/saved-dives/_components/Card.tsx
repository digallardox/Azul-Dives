"use client";
import Link from "next/link";
import { deleteSaved } from "@/app/_lib/queries/saved/deleteSaved";

export const Card = (fields: any) => {
  const { id, title, text, cost, saved_id } = fields;

  const handleClick = async () => {
    const res = await deleteSaved(saved_id);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="absolute bg-white rounded-full p-[10px]"
      >
        <img className="cursor-pointer" src="/assets/heart_icon_filled.svg" />
      </div>
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
