import { Breed } from "@src/types/breed";
import { api } from "./api";

export const getBreedsService = async ({ limit, page, search = "" }: any) => {
  try {
    const { data } = await api.get<{
      data: Breed[];
    }>(`/breeds`, {
      params: {
        limit,
        page,
        search,
      },
    });
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
