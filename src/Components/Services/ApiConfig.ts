import axios, { AxiosResponse } from "axios";

export async function fetchData(keyword: string): Promise<AxiosResponse<any>> {
  const response = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=37044d23&app_key=9e9e0cc40599f430d64128000249012d`
  );
  return response;
}

