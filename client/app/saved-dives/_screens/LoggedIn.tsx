import { getSaved } from "@/app/_lib/queries/getSaved";
import Gallery from "@/app/_components/Gallery";
import { Card } from "../_components/Card";
import { cookies } from "next/headers";

export const LoggedIn = async () => {
  const id = cookies().get("diver");
  const data = await getSaved(id!.value);

  return (
    <>
      <div className="font-semibold text-[32px]">Saved Dives</div>
      <span>{data.length} total</span>
      <>
        <div className="pb-[60px]">
          {data.map((dive_spot: any) => {
            return (
              <Card
                saved_id={dive_spot.id}
                id={dive_spot.dive_spot.id}
                title={dive_spot.dive_spot.name}
                text={dive_spot.dive_spot.description}
                cost={dive_spot.dive_spot.price}
              />
            );
          })}
        </div>
      </>
    </>
  );
};
