import { getSavedDiveSpots } from "@/_utils/queries";
import DiveGallery from "@/_components/DiveGallery";
import { getAuthToken } from "@/_helpers/authToken";
import { UnauthorizedView } from "@/_components/UnauthorizedView";
import { Layout } from "@/_components/Layout";

const Saved = async () => {
  const savedDives = await getSavedDiveSpots();
  const { authorized } = await getAuthToken();

  if (!!authorized) {
    return (
      <>
        <Layout>
          <div className="font-semibold text-2xl pb-[20px]">Saved Dives</div>
          <DiveGallery data={savedDives} />
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
