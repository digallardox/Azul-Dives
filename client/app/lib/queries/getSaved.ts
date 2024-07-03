import serverRequest from "../apiConfig";

export const getSaved = async (id: string) => {
  if (!id) `no ID passed to getSaved`;
  return await serverRequest(`/divers/${id}`);
};
