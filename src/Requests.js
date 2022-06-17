// Place your api key here
const key = '';

const requests = {
  // requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  // requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestHorror: `http://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestThriller: `http://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=53`,
  requestMystery: `http://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
  requestWestern: `http://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`,
  requestRomance: `http://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  requestFantasy: `http://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=14`,
  requestScienceFiction: `http://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
};

export default requests;