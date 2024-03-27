// 경로도 미리 작성해서 일일히 안 적게 하기
const request = {
  fetchNowPlaying : "movie/now_playing",
  fetchTrending : "/trending/all/week",
  fetchTopRated: "/movie/top_rated",
  fetchActionMovies : "/discover/movie?with_genres=28",
  fetchComedynMovies : "/discover/movie?with_genres=35",
  fetchHerrorMovies : "/discover/movie?with_genres=27",
  fetchRomanceMovies : "/discover/movie?with_genres=10749",
  fetchDocumentaries : "/discover/movie?with_genres=99",
}

export default request;