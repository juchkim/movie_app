import { useEffect } from "react";

export default function useOnClickOutside(ref, handler){
  useEffect(()=>{
    const listener = (event) => {
      console.log(!ref.current);
      console.log(ref.current.contains(event.target));
      // 현재 내가 클린한 타겟이 ref안에 포함되어있는 확인 : contains
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  },[ref, handler])
}