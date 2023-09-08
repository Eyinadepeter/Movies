import { getTvReview } from "./modules/endPoints.js";

import { fetchMovieDetails } from "./modules/functions.js";

const root = document.querySelector("container");
const id = location.href;
const API_KEY = "af87b645dab877eaef4af91d2dec9aae";

fetchMovieDetails(
  `https://api.themoviedb.org/3/tv/${getTvReview(API_KEY, id)}`,
  root
);
// https://api.themoviedb.org/3/tv/{tv_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
