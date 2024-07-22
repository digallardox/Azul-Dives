import serverRequest from "../apiConfig";

export const getReservations = async (id: string | number) => {
  const res = await serverRequest(`/divers/${id}/reservations`);
  return res
};
