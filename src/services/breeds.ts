import { IPagination } from "@src/types/pagination";
import { api } from "./api";

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  weight: {
    imperial: string;
    metric: string;
  };
}

export const getBreedsService = async ({
  limit,
  page,
  search = "",
}: IPagination) => {
  try {
    if (search) {
      const { data } = await api.get<Breed[]>(`/breeds/search?q=${search}`, {
        params: {
          search,
        },
      });
      return data;
    }
    const { data } = await api.get<Breed[]>(`/breeds`, {
      params: {
        limit,
        page,
      },
    });
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
