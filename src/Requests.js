// Place your api key here
const key = '';

const requests = {
  // requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  // requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestThriller: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=53`,
  requestMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
  requestWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  requestFantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=14`,
  requestScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
};

export default requests;
