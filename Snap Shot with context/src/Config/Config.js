export const configs = {
  url: "https://api.flickr.com/services/rest/?",
  method: "flickr.photos.search",
  api_key: "4a7010e99aa73e312b6111242b43af75",
  Secret: "4ec681e2c00563c8",
  per_page: 12,
  format: "json",
  nojsoncallback: "1",
  tag: String,
  get getUrl() {
    return (
      this.url +
      "method=" +
      this.method +
      "&api_key=" +
      this.api_key +
      "&per_page=" +
      this.per_page +
      "&format=" +
      this.format +
      "&nojsoncallback=" +
      this.nojsoncallback +
      "&tags=" +
      this.tag
    );
  },
  setTag: function (tag) {
    this.tag = tag;
  },
};
//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4a7010e99aa73e312b6111242b43af75&per_page=12&format=json&nojsoncallback=1&tags=flower