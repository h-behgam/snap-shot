import { ActionsFetch } from "../Constant/ActionsFetch";

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionsFetch.FETCH_SUCCESS:
      return {...state,
        loading: false,
        error: "",
        photos: action.payload
      };
    case ActionsFetch.FETCH_ERROR:
      return {
        loading: false,
        photos: null,
        error: "Something went wrong!",
      };
      case "reset":
        return {
          loading: true,
          photos: null,
          error: "reset",
        };
    default:
      return state;
  }
};
