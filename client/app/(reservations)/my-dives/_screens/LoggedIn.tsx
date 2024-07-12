import { cookies } from "next/headers";
import { getReservations } from "@/app/_lib/queries/getReservations";
import Card from "@/app/_components/Card";

export const LoggedIn = async () => {
  const id = cookies().get("diver");
  const data = await getReservations(id!.value);

  return (
    <>
      <span className="font-semibold text-[32px]">Upcoming Dives</span>
      <>
        <div className="pb-[60px]">
          {data.map(({ dive_spot }: any) => (
            <Card
              id={dive_spot.id}
              title={dive_spot.name}
              text={dive_spot.description}
              cost={dive_spot.price}
            />
          ))}
        </div>
      </>
    </>
  );
};
