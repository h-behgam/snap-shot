import { useEffect, useState } from "react";

function UseFetch(url) {
  
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(false)

  const fetchData = async (url) => {
    try {
      setIsloading(true)
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText)
      }
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
