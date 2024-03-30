import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import instance from '../../api/axios';
import './SearchPage.css'
import { useDebounce } from '../../hooks/useDebouce';

const SearchPage = () => {
  const { search } = useLocation();
  // location.search를 가져옴

  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([])
  const useQuery = ()=>{
    return new URLSearchParams(search);
  }

  // 쿼리를 가져오는 것은 리랜더링이 될 필요가 없기에 일반 변수로 선언
  const query = useQuery();
  const searchTerm = query.get("q");
  const debouceValue = useDebounce(searchTerm);


  useEffect(()=>{
    if(debouceValue){
      fetchSerachMovie(debouceValue);
    }
  }, [debouceValue]);

  const fetchSerachMovie = async(searchTerm)=>{
    try{
      const res = await instance.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(res.data.results);
    }catch(easeError){
      console.log(easeError);
    }
  }
  if(searchResults.length > 0){
    return(
      <section className='search-container'>
        {searchResults.map((movie)=>{
          if(movie.backdrop_path !== null && movie.media_type !== "person"){
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
            return (
              <div className='movie' key={movie.id}>
                <div
                  onClick={()=>navigate(`/${movie.id}`)}
                  className='movie__column-poster'
                >
                  <img className='movie__poster' src={movieImageUrl} alt='movie__poster' />
                </div>
              </div>
            )
          }
        })}
        
      </section>
    )
  }else{
    return(
      <section className='no-results'>
        <div className='no-results__text'>
          <p>
            찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    )
  }
}

export default SearchPage
