import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../../api/axios';

const DetailPage = () => {
  let {movieId} = useParams();
  // 라우터에서 설정해둔 파라매타를 가져오는 함수 useParams()
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData(){
      const res = await instance.get(`movie/${movieId}`);
      setMovie(res.data);
      console.log(res)
    }
    fetchData();
  }, [movieId]);
  if(!movie){ return null; }
  else{
    return (
      <section>
        <img 
          className='modal__poster-img' 
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={`${movie.backdrop_path}`}
        />
      </section>
    )
  }
}

export default DetailPage
