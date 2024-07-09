"use client";
import { useEffect, useState } from "react";
import { getDive } from "@/app/_lib/queries/dives/getDive";

export default function Page({ params }: any) {
  const [diveSpot, setDiveSpot] = useState({});
  const id = params.id;

  useEffect(() => {
    const getDive = async () => {
      const res = await fetch(
        `https://urban-couscous-595jw7gwj6wc44wv-3000.app.github.dev/dive_spots/${id}`
      );
      const dive = await res.json()
      setDiveSpot(dive);
    };
    getDive();
  }, []);

  const { name, location, description } = diveSpot || null;

  return (
    <>
      <div className="h-[400px] bg-black" />
      <div>
        <div>{name}</div>
        <div>{location}</div>
      </div>
      <div>{description}</div>
    </>
  );
}
