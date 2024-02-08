import { SET_IMAGE, SET_PENDING, SET_ERROR } from "./SnapshotActionsType";
import { actionTYPE, state } from "./Types";

const initialState: state = {
  images: null,
  loading: false,
  error: null,
};

export const SnapshotReducer = (state = initialState, action: actionTYPE): state => {
  switch (action.type) {
    case SET_PENDING:
      return { ...state, loading: true };

    case SET_IMAGE:
      return { ...state, images: action.payload, loading: false };

    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return { ...state };
  }
};
