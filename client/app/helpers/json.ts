export const parseJSON = async (res: Response): Promise<any> => {
  try {
    return await res.json();
  } catch (error: any) {
    console.error(`Error parsing json - ${error.message}`); 
    return null
  }
};

export const toJSON = (a: any): string | null => {
  try {
    return JSON.stringify(a)
  } catch (error: any) {
    console.error(`Error converting to JSON - ${error.message}`)
    return null
  }
}