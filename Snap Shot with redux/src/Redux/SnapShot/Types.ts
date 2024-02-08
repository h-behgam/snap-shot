import { SET_IMAGE, SET_PENDING, SET_ERROR } from "./SnapshotActionsType";

export interface pic {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
}
export interface photo {
  page: number;
  pages: number;
  perpage: number;
  photo: pic[];
  total: number;
}
export interface photos {
  photos: photo;
  stat: string;
}
export interface state {
  images: photos | null;
  loading: boolean;
  error: string | null;
}

export interface setPendingType {
  type: SET_PENDING;
}
export interface setImageType {
  type: SET_IMAGE;
  payload: photos;
}
export interface setErrorType {
  type: SET_ERROR;
  payload: string;
}
export type actionTYPE = setImageType | setPendingType | setErrorType;
