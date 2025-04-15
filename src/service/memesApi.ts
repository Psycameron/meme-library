import { MemeType } from "@/types/apiTypes";
import api from "./api";

export const getMemes = async (): Promise<MemeType[]> => {
  const { data } = await api.get<MemeType[]>("memes");
  return data;
};

export const getMemesById = async (id: string): Promise<MemeType> => {
  const { data } = await api.get<MemeType>(`memes/${id}`);
  return data;
};

export const updateMeme = async (meme: MemeType): Promise<void> => {
  await api.put<void>(`memes/${meme.id}`, meme);
};
