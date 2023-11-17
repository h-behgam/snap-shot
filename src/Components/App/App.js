import React from "react";
import Lightbox from "../Lightbox/Lightbox";
import SearchForm from "../SearchForm/SearchForm";
// import Lightbox from "../Lightbox-old/Lightbox";

function App() {
  return (
    <div className="container bg-body-secondary p-2">
      <SearchForm />
      {/* <Lightbox src="https://source.unsplash.com/NQSWvyVRIJk/800x599" alt="snow" caption="caption" /> */}
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
  );
}

export default App;
