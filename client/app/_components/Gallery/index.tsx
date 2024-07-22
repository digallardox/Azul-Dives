import Card from "../Card";

const Gallery = ({ data }: any) => {
  if (!!data) {
    return (
      <>
        <div className="pb-[60px]">
          {data.map((diveSpot: any) => (
            <Card
              id={diveSpot.id}
              title={diveSpot.name}
              text={diveSpot.description}
              cost={diveSpot.price}
            />
          ))}
        </div>
      </>
    );
  }

  return <>No data</>;
};

export default Gallery;
