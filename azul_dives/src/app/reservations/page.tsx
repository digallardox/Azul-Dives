import { getAuthToken } from "@/_helpers/authToken";
import { Layout } from "@/_components/Layout";
import { UnauthorizedView } from "@/_components/UnauthorizedView";
import { getReservedDives } from "@/_utils/queries";
import DiveGallery from "@/_components/DiveGallery";
import { SavedDiveCard } from "@/_components/DiveCard";

const Reservation = async () => {
  const { authorized } = await getAuthToken();
  const data = await getReservedDives()

  if (authorized) {
    return (
      <>
        <Layout>
          <div className="font-semibold text-2xl pb-[20px]">Upcoming Dives</div>
          {data.map((e) => (
            <>
            <SavedDiveCard data={e}/>
            </>
          ))}
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <UnauthorizedView page="reservations" />
      </Layout>
    </>
  );
};

export default Reservation;
