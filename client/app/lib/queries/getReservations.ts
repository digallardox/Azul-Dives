import serverRequest from "../apiConfig";

export const getReservations = async (id: string) => {
  if (!id) `no ID passed to getReservations`;
  return await serverRequest(`divers/${id}`);
};
