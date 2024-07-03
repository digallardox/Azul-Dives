import Link from "next/link";

const SavedDives = async () => {
    return (
      <>
        <div>
          <span className="font-semibold text-[32px]">Saved Dives</span>
          <div className="pt-[60px]">
            <span className="font-semibold text-[32px]">
              Log in to see your saved dives
            </span>
            <br />
            <Link href="/auth">Log in</Link>
          </div>
        </div>
      </>
    );
};

export default SavedDives;
