import { getAllDiveSpots } from "@/_utils/queries";
import DiveGallery from "@/_components/DiveGallery";
import { Layout } from "@/_components/Layout";

const Home = async () => {
  const data = await getAllDiveSpots()

  return (
    <>
      <Layout>
        <DiveGallery data={data} />
      </Layout>
    </>
  );
}

export default Home;
