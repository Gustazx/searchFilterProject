import { api } from "./api";

export const getFactsService = async ({ limit = 20 }) => {
  try {
    const data = await api.get(`/facts?limit=${limit}`);
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
