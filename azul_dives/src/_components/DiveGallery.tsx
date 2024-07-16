import DiveCard from "./DiveCard";

const DiveGallery = ({ data }: any) => {
  return (
    <>
      <div className="pb-[60px]">
        {data.map((e: any) => (
            <DiveCard fields={e} />
        ))}
      </div>
    </>
  );
};

// export const SavedDiveGallery = ({ data }: any) => {
//   return (
//     <>
//       <div className="pb-[60px]">
//         {data.map((e: any) => (
//           <DiveCard fields={e} />
//         ))}
//       </div>
//     </>
//   );
// };


export default DiveGallery;
