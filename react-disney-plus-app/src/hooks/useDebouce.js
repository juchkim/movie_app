import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
  //커스텀 훅 : 이 함수는 입력이 다 끝나고 난 후 delay시간을 기다린후 값이 리턴이 될 수 있도록 함.
  //이렇게 되면 디비에 접속하는 횟수가 타이핑시 값이 변할때마다 요청하는 것이 아닌 입력을 다 한후 딜레이 후 실행하니 서버에 부담이 덜 함
  const [debouceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  })
  return debouceValue;
}