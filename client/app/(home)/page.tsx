import SearchBar from "@/app/_components/SearchBar";
import { getDives } from "@/app/_lib/queries/dives/getDives";
import { Card } from "./_components/Card";

const Home = async () => {
  const data = await getDives();

  if (!data) {
    return <>no data :)</>;
  }

  return (
    <>
      <SearchBar />
      {data.map((dive_spot: any) => {
        return (
          <Card
            id={dive_spot.id}
            title={dive_spot.name}
            text={dive_spot.description}
            cost={dive_spot.price}
          />
        );
      })}
    </>
  );
};

export default Home;
