import { combineReducers } from "redux";
import { SnapshotReducer } from "./SnapShot/SnapshotReducer";

const rootReducer = combineReducers({
  images: SnapshotReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;