// import { applyMiddleware, compose, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./RootReducer";

// export const store = createStore(rootReducer, {}, applyMiddleware(thunk))
// // const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // export const store = createStore(rootReducer,{}, composeEnhancers(applyMiddleware(thunk)));


import { configureStore } from "@reduxjs/toolkit";
import SnapshorSlice from "./SnapShot/SnapshorSlice";


export const store = configureStore({
    reducer: {
        snapshot: SnapshorSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;