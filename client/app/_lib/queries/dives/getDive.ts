import serverRequest from "../../apiConfig";

export const getDive = async (id: any) => {
  try {
    return await serverRequest(`/dive_spots/${id}`);
  } catch (error: any) {
    console.error(`Error in getDive`, error.message);
  }
};
