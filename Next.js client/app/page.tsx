import SearchBar from "@/app/components/SearchBar";
import DivesGallery from "@/app/components/layouts/DivesGallery";
import BackDrop from "./components/BackDrop";

const Home = () => {
  return (
    <>
      {/* <BackDrop> */}
      <div className="px-[20px] pt-[100px]">
        <SearchBar />
        <DivesGallery />
        {/* </BackDrop> */}
      </div>
    </>
  );
};

export default Home;
