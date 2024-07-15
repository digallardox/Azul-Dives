import DiveCard from "./DiveCard";

const DiveGallery = ({ data }: any) => {
  return (
    <>
      <div>
        {data.map((e: any) => (
            <DiveCard fields={e} />
        ))}
      </div>
    </>
  );
};

export default DiveGallery;
