import React, { useEffect, useState } from "react"
import instance from "../api/axios";
import request from "../api/request";

import './Banner.css'


const Banner = (props) => {
  const [movie, setMovie] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const res = await instance.get(request.fetchNowPlaying);
    if(res.status === 200){
      const movieId = res.data.results[Math.floor(Math.random()*res.data.results.length)].id;
      //특정 영화의 더 상세한 정보를 가져오기
      const {data : movieDetail} = await instance.get(`movie/${movieId}`,{
        params: {
         append_to_response: "videos"
        }
      });
      setMovie(movieDetail);
      console.log(movieDetail);
    }
  }

  // 글자수가 일정이상 넘어가면 ...으로 붙여주기 위한 함수
  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
           {movie.title || movie.name || movie.orginal_name}
        </h1>
        <div className="banner__buttons">
          {movie?.vidoes?.results[0]?.key &&
            <button className="banner_button play">Play</button>
          }
        </div>
        <p className="banner__description">
          {truncate(movie.overview, 100)}
        </p>
      </div>
      <div className="banner--fadeBottom"/>


    </header>
  )
};

export default Banner;
