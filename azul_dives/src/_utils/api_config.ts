export const SERVER_API = process.env.SERVER_API;
export const API_ENDPOINT = (path: string = "") => `${SERVER_API}${path}`

export const serverRequest = async (path: string, config: {}) => {
  try {
    const res = await fetch(API_ENDPOINT(path), config)
    if (!res.ok) {
      return {
        success: false,
        message: `Error in serverRequest(): ${res.status}`,
      };
    }
    const data = await res.json()
    
    return data    
  } catch (err) {
    return {
      success: false,
      message: `Error in serverRequest() with following arg: ${path}`,
    };
  }
};
