import React, { memo } from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../Hooks/useFetch";
import Lightbox from "../Components/Lightbox/Lightbox";
import Navlinks from "../Components/Navbar/Navlinks";
import Loader from "../Components/Loader/Loader";

function Search() {
  const search = useParams();
  const checkParams = (search) => {return search !== undefined ? search : "flower" }
  const {images: result, isloading} = UseFetch(checkParams(search.search));
  return (
    <>
      <Navlinks />
      <h1 className="mt-2 mb-5">Search results</h1>
      <div className="row row-gap-3 d-flex flex-wrap justify-content-around">
        {isloading && <Loader />}
        {result && result.map((data) => {
          return (
            <Lightbox
              src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_c.jpg`}
              alt={data.title}
              caption={data.title}
              key={data.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default memo(Search);
