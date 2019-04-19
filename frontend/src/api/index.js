import axios from 'axios';

/** API 함수들을 정리  */
function fetchMovieList () {
  return axios.get('/api/movies');
}

export {
  fetchMovieList
};
