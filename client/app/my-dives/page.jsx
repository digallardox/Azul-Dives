import Link from "next/link";

const MyDives = () => {

  return (
    <>
      <div>
        <span className="font-semibold text-[32px]">Upcoming Dives</span>
        <div className="pt-[60px]">
          <span className="font-semibold text-[32px]">Log in to see your planned dives</span>
          <br />
          <Link href="/auth">Log in</Link>
        </div>
      </div>
    </>
  );
};

export default MyDives;
