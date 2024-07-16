export const SaveButtonOutline = () => {
  return (
    <>
      <div>
        <img className={Styles.heartIcon} src="/icons/heart_icon.svg" />
      </div>
    </>
  );
};

export const SaveButtonFilled = () => {
  return (
    <>
      <div>
        <img className={Styles.heartIcon} src="/icons/heart_icon_filled.svg" />
      </div>
    </>
  );
};

const Styles = {
  title: "text-lg font-semibold",
  heartIcon: "absolute right-10",
};