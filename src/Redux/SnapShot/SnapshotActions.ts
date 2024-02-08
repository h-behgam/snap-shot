import axios from "axios";
import { AxiosError } from "axios";
import { SET_IMAGE, SET_PENDING, SET_ERROR } from "./SnapshotActionsType";
import { Dispatch } from "redux";
import { actionTYPE, photos, setErrorType, setImageType, setPendingType } from "./Types";

export const setImage = (image: photos): setImageType => {
  return {
    type: SET_IMAGE,
    payload: image,
  };
};

export const setPending = (): setPendingType => {
  return {
    type: SET_PENDING,
  };
};

export const setError = (error: any): setErrorType => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const fetchImage = (title: string = "flower") => {
  const url: string = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a7010e99aa73e312b6111242b43af75&per_page=12&format=json&nojsoncallback=1&tags=${ title }`;
  return async (dispatch: Dispatch<actionTYPE>) => {
    dispatch(setPending());
    try {
      const res = await axios.get(url);
      dispatch(setImage(res.data));
    } catch (error) {
      const err = error as AxiosError;
      dispatch(setError(err.message));
    }
  };
};
