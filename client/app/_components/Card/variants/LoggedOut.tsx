"use client"
import Link from "next/link";

export const LoggedOut = ({fields}: any) => {
  const { id, title, text, cost } = fields;

  return (
    <>
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
}
