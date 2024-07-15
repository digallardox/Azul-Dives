import { getAllDiveSpots } from "@/_utils/queries";
import DiveGallery from "@/_components/DiveGallery";

const Home = async () => {
  const data = await getAllDiveSpots()

  return (
    <>
    <DiveGallery data={data} />
    </>
  )
}

export default Home;
