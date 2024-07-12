const SERVER_API = process.env.SERVER_API;
export const API_ENDPOINT = (path: string = "") => `${SERVER_API}${path}`;
