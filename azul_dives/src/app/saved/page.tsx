import { getSavedDiveSpots } from "@/_utils/queries";
import { getAuthToken } from "@/_helpers/authToken";
import { UnauthorizedView } from "@/_components/UnauthorizedView";
import { Layout } from "@/_components/Layout";
import { SavedDiveCard } from "@/_components/DiveCard";

const Saved = async () => {
  const data = await getSavedDiveSpots();
  const { authorized } = await getAuthToken();

  if (!!authorized) {
    return (
      <>
        <Layout>
          <div className="font-semibold text-2xl pb-[20px]">Saved Dives</div>
          { data.map((e: any) => (
            <>
            <SavedDiveCard data={e} />
            </>
          ))}
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <UnauthorizedView page="saved" />
      </Layout>
    </>
  );
};

export default Saved;
