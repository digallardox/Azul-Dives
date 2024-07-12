"use server";
import { API_ENDPOINT } from "./api_config";

export const getAllDiveSpots = async () => {
  try {
    const res = await fetch(
      `https://urban-couscous-595jw7gwj6wc44wv-3000.app.github.dev/dive_spots`
    );
    const data = await res.json();
    console.log(data)
    return data;

  } catch (err: any) {
    return {
      success: false,
      message: `Error gettingAllDiveSpots(): ${err.message}`,
    };
  }
};
