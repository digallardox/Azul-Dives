import SearchBar from "@/app/components/SearchBar";
import DivesGallery from "@/app/components/layouts/DivesGallery";
import BackDrop from "./components/BackDrop";
import { getDiveSpots } from "@/lib/queries";

const Home = async () => {
  const data = await getDiveSpots()

  return (
    <>
      {/* <BackDrop> */}
        <SearchBar />
        <DivesGallery data={data}/>
        {/* </BackDrop> */}
    </>
  );
};

export default Home;
