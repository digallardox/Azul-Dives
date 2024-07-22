"use client";
import { useEffect, useState } from "react";
import { getDiveSpot } from "@/_utils/queries";

const Page = ({ params }: any) => {
  const [diveSpot, setDiveSpot] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await getDiveSpot(params.id);
      setDiveSpot(res);
    };
    getData();
  }, []);

  return (
    <>
      <div className="pb-[40px] cursor-pointer">
        <div>{diveSpot.name}</div>
      </div>
    </>
  );
};

export default Page;
