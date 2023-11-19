import { useEffect, useState } from "react";

function UseFetch(tag) {
  const [images, setImages] = useState([]);
  const config = {
    url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=",
    api_key: "4a7010e99aa73e312b6111242b43af75",
    Secret: "4ec681e2c00563c8",
  };
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setImages(json.photos.photo);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(`${config.url}${config.api_key}&tags=${tag}&per_page=4&format=json&nojsoncallback=1`);
  }, [tag]);

  return images;
}

export default UseFetch;
