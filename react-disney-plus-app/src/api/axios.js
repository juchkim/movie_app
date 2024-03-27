import axios from "axios";

//axios시 공통 부분은 파일로 따로 뺌

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "470be290518a9bbbd53b307de04ba606",
    language: "ko-KR"
  }
})

export default instance;