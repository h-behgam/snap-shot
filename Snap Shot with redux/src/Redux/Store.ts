import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./RootReducer";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk))
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(rootReducer,{}, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
