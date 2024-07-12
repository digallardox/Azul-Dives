// import { useRouter } from "next/navigation";

export const SwitchContextButton = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={router.push("/guide")}>Switch</button>
    </>
  );
};
