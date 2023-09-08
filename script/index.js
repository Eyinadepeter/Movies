import { getPopular, getLatest, } from "./modules/endPoints.js"
import { fetchLatest } from "./modules/functions.js"

const API_KEY = 'af87b645dab877eaef4af91d2dec9aae'

const latestDiv = document.getElementById('latest')
const popularDiv = document.getElementById('popular')



fetchLatest(`https://api.themoviedb.org/3/movie/${getLatest(API_KEY)}`, latestDiv)
fetchLatest(`https://api.themoviedb.org/3/movie/${getPopular(API_KEY)}`, popularDiv)

