export const FormLayout = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-between py-[20px]">
        <div>{label}</div>
        <div
          onClick={() => setIsEditing((prevState) => !prevState)}
          className="underline cursor-pointer"
        >
          Edit
        </div>
        <div>{keyValue[formattedLabel]}</div>
      </div>
      <hr />
    </>
  );
};
