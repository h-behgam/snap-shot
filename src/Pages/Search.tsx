import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Redux/SnapShot/SnapshorSlice";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";

import Lightbox from "../Components/Lightbox/Lightbox";
import Loader from "../Components/Loader/Loader";
import Navlinks from "../Components/Navbar/Navlinks";

function Search() {
  const params = useParams();
  const { isLoading, data, error } = useAppSelector((state) => state.snapshot);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let title: string | undefined = undefined;
    if (params.id && params.id.trim().length > 0) {
      title = params.id;
    }
    dispatch(fetchData(title));
  }, [params]);

  return (
    <>
      <Navlinks />
      <h1 className="mt-2 mb-5">Search results</h1>
      <div className="row row-gap-3 d-flex flex-wrap justify-content-around">
        {isLoading && <Loader />}
        {error && <h1>{error}</h1>}
        {data?.photos.photo.map((data: any) => {
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
