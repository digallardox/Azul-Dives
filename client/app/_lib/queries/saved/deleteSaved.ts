import serverRequest from "../../apiConfig";
import { getUserID } from "../../auth/getUserID";

export const deleteSaved = async (id: any) => {
  const userID = await getUserID();

  return await serverRequest(`/divers/${userID}/saved_dive_spots/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
