import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Search from "../Pages/Search";
// import Wrapper from "../Components/Wrapper/Wrapper";
import Layout from "../Pages/Layout";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/search" element={<Search />} />
          <Route path="/search/mountain" element={<Search />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
