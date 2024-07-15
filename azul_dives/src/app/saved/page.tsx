import { getSavedDiveSpots } from "@/_utils/queries";
import DiveGallery from "@/_components/DiveGallery";
import { getAuthToken } from "@/_helpers/authToken";
import { UnauthorizedView } from "@/_components/UnauthorizedView";
import { Layout } from "@/_components/Layout";

const Saved = async () => {
  const dive_spot = await getSavedDiveSpots()

    const { authorized } = await getAuthToken();

    if (!!authorized) {
      return (
        <>
          <DiveGallery data={dive_spot} />
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
