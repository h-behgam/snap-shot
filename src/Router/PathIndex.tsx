import React from "react";
import { RouteObject } from "react-router-dom";
// import SearchForm from "../Components/SearchForm/SearchForm";

const Home = React.lazy(() => import("../Pages/Home"));
const Search = React.lazy(() => import("../Pages/Search"));

const PathConstant = {
  HOME: "/",
  SEARCH: "/search",
  SEARCH2: "/search/:id",
};

const routes: RouteObject[] = [
  { path: PathConstant.HOME, element: <Home /> },
  { path: PathConstant.SEARCH, element: <Search /> },
  { path: PathConstant.SEARCH2, element: <Search /> },
];
export default routes;
