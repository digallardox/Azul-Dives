import SearchBar from "@/app/_components/SearchBar";
import Gallery from "./_components/Gallery";
import { getDives } from "@/app/_lib/queries/getDives";

const Home = async () => {
  const data = await getDives();

  if (!data) {
    return <>no data :)</>;
  }

  return (
    <>
      <SearchBar />
      <Gallery data={data} />
    </>
  );
};

export default Home;
