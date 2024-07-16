"use client";
import { SaveButton } from "./buttons/save";

const DiveCard = ({ fields }: any) => {
  const { dive_spot } = fields || null;

  if (!!dive_spot) {
    const { id, name, description, price, location } = dive_spot;
    return (
      <>
        <div className="pb-[40px] cursor-pointer">
          <SaveButton state={true} />
          <div className="w-[full] aspect-[10/10] bg-[#d9d9d9] rounded-[15px]" />
          <div className={Styles.title}>{name}</div>
          <div>{description}</div>
          <div>
            <strong>${price}</strong> per explorer
          </div>
        </div>
      </>
    );
  }

  const { id, name, description, price, location, saved } = fields;
  console.log(saved)
  return (
    <>
      <div className="pb-[40px] cursor-pointer">
        <SaveButton state={saved} />
        <div className="w-[full] aspect-[10/10] bg-[#d9d9d9] rounded-[15px]" />
        <div className={Styles.title}>{name}</div>
        <div>{description}</div>
        <div>
          <strong>${price}</strong> per explorer
        </div>
      </div>
    </>
  );
};

const Styles = {
  title: "text-lg font-semibold",
  heartIcon: "absolute right-10",
};

export default DiveCard;
