"use client";

const DiveCard = ({ fields }: any) => {
  const { id, name, description, price, location } = fields;

  return (
    <>
      <div className="pb-[40px] cursor-pointer">
        {!!fields.saved ? (
          <>
            <img
              className={Styles.heartIcon}
              src="/icons/heart_icon_filled.svg"
            />
          </>
        ) : (
          <>
            <img className={Styles.heartIcon} src="/icons/heart_icon.svg" />
          </>
        )}
        <div className="w-[80%] aspect-[10/10] bg-[#d9d9d9] rounded-[15px]" />
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
  heartIcon: "absolute top-0 right-0",
};

export default DiveCard;
