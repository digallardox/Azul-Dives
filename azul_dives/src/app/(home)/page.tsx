import { getAllDiveSpots } from "@/_utils/queries";
import DiveGallery from "@/_components/DiveGallery";
import { Layout } from "@/_components/Layout";
import { getAuthToken } from "@/_helpers/authToken";
import { DiveCard } from "@/_components/DiveCard";
import { DiveCardAuth } from "@/_components/DiveCard";

const Home = async () => {
  const { authorized } = await getAuthToken();
  const data = await getAllDiveSpots()

  if (!authorized){
  return (
    <>
      <Layout>
        {
          data.map((e: any) => (
            <DiveCard data={e} />
          ))
        }
      </Layout>
    </>
  );
}

return (
  <Layout>
    {data.map((e: any) => (
      <DiveCardAuth fields={e} />
    ))}
  </Layout>
);
}

export default Home;
