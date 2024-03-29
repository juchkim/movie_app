import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import instance from '../../api/axios';

const SearchPage = () => {
  const { search } = useLocation();
  // location.search를 가져옴

  const [searchResults, setSearchResults] = useState([])
  const useQuery = ()=>{
    const query = new URLSearchParams(search);
    return query.get("q");
  }

  // 쿼리를 가져오는 것은 리랜더링이 될 필요가 없기에 일반 변수로 선언
  const searchTerm = useQuery();

  useEffect(()=>{
    fetchSerachMovie();
  }, [searchTerm]);

  const fetchSerachMovie = async()=>{
    try{
      const res = await instance.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(res.data.results);
    }catch(easeError){
      console.log(easeError);
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default SearchPage
