const image = (moviePoster) => `https://image.tmdb.org/t/p/w500${moviePoster}`;
export const fetchLatest = (url, root) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data.results, root));
};

const displayData = (data, root) => {
  // if there is an error display the error message
  console.log(data);
  if (data) {
    data.forEach((movie) => {
      const movieDisplay = document.createElement("a");
      movieDisplay.innerHTML = `
                <img src='${image(movie.backdrop_path)}'>
                <p> ${movie.title || movie.original_title}</p>
                <p class='overview'>${movie.overview
                  .split(" ")
                  .slice(0, 20)
                  .join(" ")} ...show more</p>
                <p>Release Date:${movie.release_date} </p>
            `;
      movieDisplay.classList.add("movie_card");
      movieDisplay.href = `/movie_detail.html?id=${movie.id}`;
      root.append(movieDisplay);
    });
  }
};

export const fetchMovieDetails = (url, root) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMovieDetails(data, root));
};

const displayMovieDetails = (data, root) => {
  console.log(data);
  const movieInfo = document.createElement("div");
  document.title = data.title;
  movieInfo.innerHTML = `
        <div class='img-div'>
            <img loading='lazy' src='${image(data.poster_path)}' >
        </div>

        <div class='other-data'>
           <div class='details'> 
                <h1>${data.title} </h1>
                <p> ${data.tagline} </p>
                <p>Genres: ${data.genres.map((genre) => `${genre.name}`)}</p>
           </div>
            <p class='overview'>${data.overview} </p
        </div>
    `;

  root.append(movieInfo);
};

export const fetchpopulartv = (url, root) => {
  fetch(url)
    .then((root) => root.json())
    .then((data) => series(data.results, root));
};

const series = (data, root) => {
  console.log(data);
  if (data) {
    data.forEach((series) => {
      const display = document.createElement("a");

      display.innerHTML = ` <img loading= "lazy" class ="img-drp" src="${image(
        series.backdrop_path
      )}">
        
      <a class ="tittle">${series.name}</a>
      <p><b class="overview">OVERVIEW</b> :${series.overview}</p>
      <h3>COUNTRY:${series.origin_country}</h3>
   
   `;
      display.classList.add("card");
      root.append(display);
    });
  }
};

export const fetchseries_review = (url, root) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => display_seriesreview(data, root));
};
const display_seriesreview = (data, root) => {
  console.log(data);
};
