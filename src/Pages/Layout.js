import React, { Suspense } from "react";
import Menu from "../Components/Navbar/Menu";
import SearchForm from "../Components/SearchForm/SearchForm";
import { Outlet } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

function Layout() {
  return (
    <>
      <Menu />
      <div className="container bg-body-secondary1 p-2">
        <SearchForm />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Layout;
