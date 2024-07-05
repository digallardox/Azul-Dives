"use client";

const CloseButton = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center"
      >
        <img src="/assets/close_icon.svg" alt="close button" />
      </button>
    </>
  );
};

export { CloseButton };
