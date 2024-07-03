import SearchBar from "@/app/components/SearchBar";
import Gallery from "./components/Gallery";
import { getDives } from "@/app/lib/queries/getDives";

const Home = async () => {
  const data = await getDives()

  
  if (!data) {
    return (
      <>
      no data :)
      </>
    )
  }

  return (
    <>
      <SearchBar />
      <Gallery data={data} />
    </>
  );
};

export default Home;
