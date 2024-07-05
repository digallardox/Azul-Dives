import React from "react";

const BackDrop = ({ children }: any) => {
  return (
    <>
      <div className="absolute bottom-0 left-0 rounded-t-[30px] w-[100%] h-[95%] bg-white flex flex-col items-center">
        {children}
      </div>
      <div className="w-screen h-screen bg-black/[0.20]" />
    </>
  );
};

export default BackDrop;
