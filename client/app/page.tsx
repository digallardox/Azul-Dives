import SearchBar from "./components/searchbar/Searchbar.jsx"
import Multiple from "./components/Layouts/multiple.jsx"

export default function Home() {
  return (
    <>
    <div className="absolute bottom-0 left-0 rounded-t-[30px] w-screen h-[800px] bg-white">
    <div className="flex justify-center pt-[30px]">
      <SearchBar />
      </div>
      <div className="flex justify-center pt-[30px]">
      <Multiple />
      </div>
    </div>
    <div className="w-screen h-screen bg-black/[0.20]" />
    </>
  );
}
