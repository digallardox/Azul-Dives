import { toJSON } from "@/app/_helpers/json";
import serverRequest from "../../apiConfig";
import { getUserID } from "../../auth/getUserID";

export const createSaved = async (id: any) => {
  const userID = await getUserID();
  const body = {
    saved_dive: {
        dive_spot_id: id
    }
  }

  return await serverRequest(`/divers/${userID}/saved_dive_spots`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: toJSON(body)
  });
};
