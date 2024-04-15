import axios from "axios";

export const api = axios.create({
  baseURL: "https://dogapi.dog/api/v2",
});
