"use client";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="w-[100px] h-[50px] inline-flex items-center justify-center bg-black rounded-md text-white"
      >
        <p>{text}</p>
      </button>
    </>
  );
};

export default Button;
