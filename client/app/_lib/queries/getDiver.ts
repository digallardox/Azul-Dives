import serverRequest from "../apiConfig";

export const getDiver = async (id: string | number) => {
  const res = await serverRequest(`/divers/${id}`);
  return res;
};
