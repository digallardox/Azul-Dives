import { getAuthToken } from "@/_helpers/authToken";
import { Layout } from "@/_components/Layout";
import { UnauthorizedView } from "@/_components/UnauthorizedView";

const Reservation = async () => {
  const { authorized } = await getAuthToken();

  if (authorized) {
    return <>authorized</>;
  }

  return (
    <>
      <Layout>
        <UnauthorizedView page="reservations" />
      </Layout>
    </>
  );
};

export default Reservation