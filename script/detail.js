import { fetchMovieDetails } from "./modules/functions.js";
import { getMovieDetails } from "./modules/endPoints.js";

const root = document.getElementById("container");
const id = location.href.split("=")[1];
const API_KEY = "af87b645dab877eaef4af91d2dec9aae";

fetchMovieDetails(
  `https://api.themoviedb.org/3/movie/${getMovieDetails(API_KEY, id)}`,
  root
);
