import Single from "./Single";

const Multiple = ({ data }) => {

  return (
    <>
      <div className="pb-[60px]">
        {data.map((diveSpot) => (
          <Single
            id={diveSpot.id}
            title={diveSpot.name}
            text={diveSpot.description}
            cost={diveSpot.price}
          />
        ))}
      </div>
    </>
  );
};

export default Multiple;
