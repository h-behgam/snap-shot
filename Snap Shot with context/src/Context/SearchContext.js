import React, { useContext, useReducer } from "react";
import { reducer } from "./SearchReducer";
import UseFetchAxios from "../Hooks/UseFetchAxios";
import { configs } from "../Config/Config";
import { initialState } from "../Constant/InitialState";

const MyContext = React.createContext();
function SearchContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUrls = (url) => {
    UseFetchAxios(checkUrl(url), dispatch);
  };
  return <MyContext.Provider value={{ state, setUrls, dispatch }}>{children}</MyContext.Provider>;
}
const checkUrl = (url) => {
  if (url !== undefined && url !== "") {
    configs.setTag(url);
    return configs.getUrl;
  }
  configs.setTag("flower");
  return configs.getUrl;
};

export const useSearchState = () => {
  const { state, setUrls, dispatch } = useContext(MyContext);

  return { state, setUrls, dispatch };
};

export default SearchContext;
