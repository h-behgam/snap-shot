import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "../Components/Lightbox/Lightbox";
import Loader from "../Components/Loader/Loader";
import { useSearchState } from "../Context/SearchContext";

function Search() {
  let { state, setUrls, dispatch } = useSearchState();
  let { loading, photos } = { ...state };
  const search = useParams();
  setUrls(search.search);
  useEffect(() => {
    dispatch({type: "reset"})
  }, [search])
  
  return (
    <>
      <h1 className="mt-2 mb-5">Search results</h1>
      <div className="row row-gap-3 d-flex flex-wrap justify-content-around">
        {loading && <Loader />}
        {photos &&
          photos.photo.map((data) => {
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
