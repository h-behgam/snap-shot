import { useEffect } from "react";
import axios from "axios";
import { ActionsFetch } from "../Constant/ActionsFetch";

function UseFetchAxios(url, dispatch) {
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: ActionsFetch.FETCH_SUCCESS, payload: response.data.photos });
      })
      .catch((error) => {
        dispatch({ type: ActionsFetch.FETCH_ERROR });
      })
  }, [url]);
}
export default UseFetchAxios;