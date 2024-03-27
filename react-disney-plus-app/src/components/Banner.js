import React, { useEffect, useState } from "react"
import instance from "../api/axios";
import request from "../api/request";

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
    }
  }

  return (
    <div>
      
    </div>
  )
};

export default Banner;
