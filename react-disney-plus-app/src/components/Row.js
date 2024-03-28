import React, { useCallback, useEffect, useState } from "react"
import instance from "../api/axios";
import './Row.css';
import MovieModal from "./MovieModal";

const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const fetchMovieData = useCallback( async () => {
    let res = await instance.get(fetchUrl)
    setMovies(res.data.results);
  }, [fetchUrl])

  const handleClick = (movie) => {
    setModalOpen(true);
    setSelectMovie(movie);
  }

  useEffect(() =>{
    fetchMovieData();
  },[fetchMovieData])

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow" onClick={()=>{
            document.getElementById(id).scrollLeft += window.innerWidth/2 - 80;
            //가로 스크롤 발생 시킨다음에 스크롤을 안보이게 하고 해당 부모 태그의 가로스크롤을 움직이게 하는 것(80은 세로스크롤바의 크기)
          }}>
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map(movie => (
            <img 
              className="row__poster" 
              key={movie.id}
              onClick={()=>handleClick(movie)} 
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
              alt={movie.title} 
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow" onClick={()=>{
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}>
            {">"}
          </span>
        </div>
      </div>
      {modalOpen && 
      <MovieModal
        setModalOpen={setModalOpen}
        {...selectMovie}
      />
      }
      
    </div>
  )
};

export default Row;
