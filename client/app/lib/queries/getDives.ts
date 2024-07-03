import serverRequest from "../apiConfig";

export const getDives = async () => {
  try {
    return await serverRequest("/dive_spots");
  } catch (error: any){
    console.error(`Error in getDives`, error.message)
  }
};
