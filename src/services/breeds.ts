import { Breed } from "@src/types/breed";
import { api } from "./api";

export const getBreedsService = async ({ limit, page, search = "" }: any) => {
  try {
    if (search) {
      console.log("Tem search");
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

export const getBreedsBySearchService = async ({ search = "" }: any) => {
  const { data } = await api.get<Breed[]>("");
};
