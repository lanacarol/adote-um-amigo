import axios from "axios";

const dogApi = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    "x-api-key": process.env.REACT_APP_DOG_API_KEY,
  },
});

export async function getDogs() {
  const response = await dogApi.get("/breeds");
  return response.data;
}