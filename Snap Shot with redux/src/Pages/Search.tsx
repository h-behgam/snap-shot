import { memo, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/RootReducer";
import { fetchImage } from "../Redux/SnapShot/SnapshotActions";
import { AppDispatch } from "../Redux/Store";
import Lightbox from "../Components/Lightbox/Lightbox";
import Loader from "../Components/Loader/Loader";
import Navlinks from "../Components/Navbar/Navlinks";
import { useParams } from "react-router-dom";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

function Search() {
  const params = useParams();
  const { images, loading, error } = useTypedSelector((state) => state.images);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let title: string | undefined = undefined;
    if (params.id && params.id.trim().length > 0) {
      title = params.id;
    }
    dispatch(fetchImage(title));
  }, [params]);

  return (
    <>
      <Navlinks />
      <h1 className="mt-2 mb-5">Search results</h1>
      <div className="row row-gap-3 d-flex flex-wrap justify-content-around">
        {loading && <Loader />}
        {error && <h1>{error}</h1>}
        {images?.photos.photo.map((data: any) => {
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
