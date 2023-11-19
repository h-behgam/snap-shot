import { useEffect, useState } from "react";
import { configs } from "../Config/Config";

function UseFetch(tag) {
  const url = `${configs.url}${configs.api_key}&per_page=${configs.per_page}&format=json&nojsoncallback=1&tags=${tag}`;
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(false)

  const fetchData = async (url) => {
    try {
      setIsloading(true)
      const res = await fetch(url);
      const json = await res.json();
      setImages(json.photos.photo);
      setIsloading(false)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {images, isloading};
}

export default UseFetch;
