import { getpopulartv } from "./modules/endPoints.js";
import { fetchpopulartv } from "./modules/functions.js";
const API_KEY = "af87b645dab877eaef4af91d2dec9aae";
const root = document.querySelector(".container");

fetchpopulartv(
  `https://api.themoviedb.org/3/tv/${getpopulartv(API_KEY)}`,
  root
);
