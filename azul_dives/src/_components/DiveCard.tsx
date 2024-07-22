"use client";
import { SaveButton } from "./buttons/saveButton";
import Link from "next/link";

export const SavedDiveCard = ({ data }: any) => {
  const saved_id = data.id
  const { id, name, description, price, location, saved } = data.dive_spot;

  return (
    <>
      <>
        <div className="pb-[40px] cursor-pointer">
          <SaveButton state={saved} id={saved_id} />
          <Link href={`/dives/${id}`}>
            <div className="w-[full] aspect-[10/10] bg-[#d9d9d9] rounded-[15px]" />
            <div className={Styles.title}>{name}</div>
            <div>{description}</div>
          </Link>
          <div>
            <strong>${price}</strong> per explorer
          </div>
        </div>
      </>
    </>
  );
};

export const DiveCardAuth = ({ fields }: any) => {
  const { id, saved_id, name, description, price, location, saved } = fields;

  return (
    <>
      <div className="pb-[40px] cursor-pointer">
        <SaveButton state={saved} id={saved_id} />
        <Link href={`/dives/${id}`}>
          <div className="w-[full] aspect-[10/10] bg-[#d9d9d9] rounded-[15px]" />
          <div className={Styles.title}>{name}</div>
          <div>{description}</div>
        </Link>
        <div>
          <strong>${price}</strong> per explorer
        </div>
      </div>
    </>
  );
};

export const DiveCard = ({ data }: any) => {
  const { id, name, description, price, location, saved, saved_id } = data;

  return (
    <>
      <Link href={`/dives/${id}`}>
        <div className="pb-[40px] cursor-pointer">
          <div className="w-[full] aspect-[10/10] bg-[#d9d9d9] rounded-[15px]" />
          <div className={Styles.title}>{name}</div>
          <div>{description}</div>
          <div>
            <strong>${price}</strong> per explorer
          </div>
        </div>
      </Link>
    </>
  );
};

const Styles = {
  title: "text-lg font-semibold",
  heartIcon: "absolute right-10",
};
