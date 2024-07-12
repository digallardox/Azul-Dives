import { authLogin } from "@/_utils/auth/authLogin";
import { getAllDiveSpots } from "@/_utils/queries";

const Home = async () => {
  const token = true;
  const body = {
    auth: {
      username: "diego",
      password: "Sharkyshark",
    },
  };

  const res = await authLogin(body);
  console.log(res)

  // const res2 = await getAllDiveSpots()
  // console.log(res2)

  return <>{!!token ? <>logged in</> : <>logged out</>}</>;
};

export default Home;
