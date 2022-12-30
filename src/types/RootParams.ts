import { Photo } from "./types";

export type FullPhotoParams = {
  title: string | null;
  photo: string;
  author: string;
};

export type RootStackParamList = {
  PhotoList: undefined;
  FullPhoto: {
    image: Photo;
  };
};