import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../Hooks/useFetch";
import Lightbox from "../Components/Lightbox/Lightbox";
import Navlinks from "../Components/Navbar/Navlinks";

function Search() {
  console.log(useParams());
  const search = useParams();
  const result = UseFetch(search.search);
  console.log(result);
  return (
    <>
      <Navlinks />
      <h1 className="mt-2 mb-5">Search results</h1>
      <div className="row row-gap-3 d-flex flex-wrap justify-content-around">
        {result.map((data) => {
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

export default Search;
