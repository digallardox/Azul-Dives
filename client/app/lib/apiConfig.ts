import { parseJSON } from "../helpers/json";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;
const API_ENDPOINT = (URI: string) => `${SERVER_URL}${URI}`;


const serverRequest = async (URI: string, config: any = {}) => {
  if (!URI) console.error("URI not passed to server request")

  try {
    const res = await fetch(API_ENDPOINT(URI), config);
    if (!res.ok) console.error(`Issue with query: ${res.status}`)
    return parseJSON(res);
  }
  catch (error: any){
    console.error(`Error in server request - ${error.message}`)
    return []
  }
};

export default serverRequest;
