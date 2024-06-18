import SearchBar from "@/app/components/SearchBar";
import DivesGallery from "@/app/components/layouts/DivesGallery";
import BackDrop from "./components/BackDrop";

const Home = async () => {
    const res = await fetch(
      "https://automatic-happiness-4r65xpq77x5cq456-3000.app.github.dev/dive_spots"
    );
    const data = await res.json();

  return (
    <>
      {/* <BackDrop> */}
      <div className="px-[20px] pt-[100px]">
        <SearchBar />
        <DivesGallery data={data}/>
        {/* </BackDrop> */}
      </div>
    </>
  );
};

export default Home;
