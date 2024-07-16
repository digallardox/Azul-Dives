"use server";
import { getAuthToken } from "@/_helpers/authToken";
import { serverRequest } from "./api_config";

export const getAllDiveSpots = async () => {
  const { authToken } = await getAuthToken();
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  try {
    const data = await serverRequest("/dive_spots", config);
    return data
  } catch (err: any) {
    return {
      success: false,
      message: `Error in getAllDiveSpots(): ${err.message}`,
    };
  }
};

export const getSavedDiveSpots = async () => {
  const { authToken } = await getAuthToken();
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  try {
    const res = await serverRequest("/saved_dive_spots", config);
    return res
  } catch (err: any) {
    return {
      success: false,
      message: `Error getSavedDiveSpots(): ${err.message}`,
    };
  }
}

export const getUserProfile = async () => {
  const { authToken } = await getAuthToken();
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  try {
    const res = await serverRequest("/divers/profile", config)
    return res
  } catch (err: any) {
    return {
      success: false,
      message: `Error in getUserProfile(): ${err.message}`,
    };
  }
}

export const getReservedDives = async () => {
  const { authToken } = await getAuthToken();
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  };

  try {
    const res = await serverRequest("/reservations", config);
    return res
  } catch (err: any) {
    return {
      success: false,
      message: `Error in getReservedDives(): ${err.message}`,
    };
  }
}