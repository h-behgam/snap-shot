import React from "react";
import Lightbox from "../Lightbox/Lightbox";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Navbar/Menu";

function Wrapper() {
  return (
    <>
      <Menu />
      <div className="container bg-body-secondary1 p-2">
        <SearchForm />
        <div className="row p-4 row-gap-3 d-flex flex-wrap justify-content-between">
          <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" />
          <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" />
          <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" />
          <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" />
          <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" />
          <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" />
          <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" />
          <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" />
        </div>
      </div>
    </>
  );
}

export default Wrapper;
