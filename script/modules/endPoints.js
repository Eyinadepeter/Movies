export const getPopular = (api_key) =>
  `popular?api_key=${api_key}&language=en-US&page=1`;
export const getVideos = (movie_id, api_key) =>
  `${movie_id}/videos?api_key=${api_key}&language=en-US`;
export const getLatest = (api_key) =>
  `top_rated?api_key=${api_key}&language=en-US&page=1S`;
export const getMovieDetails = (api_key, movie_id) =>
  `${movie_id}?api_key=${api_key}&language=en-US`;
export const getpopulartv = (api_key) =>
  `popular?api_key=${api_key}&language=en-US&page=1`;
export const getLatesttv = (api_key) =>
  `latest?api_key=${api_key}&language=en-US`;
export const getTvReview = (tv_id, api_key) =>
  `${tv_id}/reviews?api_key=${api_key}&language=en-US&page=1`;
