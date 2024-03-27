import React, { useEffect, useState } from "react"
import instance from "../api/axios";
import request from "../api/request";

import './Banner.css'
import styled from "styled-components";


const Banner = (props) => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

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

  if(isClicked){
    return(
      <Container>
        <HomeCaonter>
          <Iframe 
            width="640"
            height="360" 
            frameborder="0"
            src="https://www.youtube.com/embed/3NZb75IvrLo?controls=0&autoplay=1&loop=1&mute=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
            >
          </Iframe>
          
          {/* <Iframe
            src={`https://www.youtube.com/embed/${movie.video.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
          /> */}
          <button onClick={()=>{setIsClicked(false)}}>X</button>
        </HomeCaonter>
      </Container>
    )
  }else{
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
            {movie?.vidoes?.results[0]?.key || true ?
              <button className="banner_button play" onClick={()=>{
                setIsClicked(true);
              }}>Play</button>
              :<></>
            }
          </div>
          <p className="banner__description">
            {truncate(movie.overview, 100)}
          </p>
        </div>
        <div className="banner--fadeBottom"/>
  
  
      </header>
    )
  }
};

export default Banner;


const Container = styled.div`
  display:  flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width : 100%;
  height: 100vh;
`;

const HomeCaonter = styled.div`
 width: 100%;
 height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opcaity: 0.65;
  border: none;

  &::after{
    content: "",
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

`