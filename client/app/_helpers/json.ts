export const parseJSON = async (data: any): Promise<any> => {
  try {
    const parsed = await data.json();
    return parsed
  } catch (error) {
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