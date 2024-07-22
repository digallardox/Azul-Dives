import serverRequest from "../../apiConfig";

export const getSaved = async (id: number | string) => {
  return await serverRequest(`/divers/${id}/saved_dive_spots`);
};
