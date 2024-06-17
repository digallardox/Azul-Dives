import SearchBar from "@/app/components/SearchBar"
import DivesGallery from "@/app/components/layouts/DivesGallery"
import BackDrop from "./components/BackDrop";

const Home = () => {
  return (
    <>
    <BackDrop>
      <SearchBar />
      <DivesGallery />
    </BackDrop>
    </>
  );
}

export default Home;
