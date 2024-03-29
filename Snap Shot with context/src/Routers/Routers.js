import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Search from "../Pages/Search";
import Layout from "../Pages/Layout";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/search" element={<Search />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Routers;
