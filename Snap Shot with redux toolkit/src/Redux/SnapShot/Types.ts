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
export interface stateType {
  isLoading: boolean;
  data: photos | null | undefined;
  error: string | unknown | any;
}
export type title = string | undefined
