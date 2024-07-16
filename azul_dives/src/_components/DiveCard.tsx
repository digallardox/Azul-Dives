"use client";
import { SaveButtonFilled, SaveButtonOutline } from "./buttons/save";
const DiveCard = ({ fields }: any) => {
  const { id, name, description, price, location } = fields;

  return (
    <>
      <div className="pb-[40px] cursor-pointer">
        {!!fields.saved ? <SaveButtonFilled /> : <SaveButtonOutline /> }
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
