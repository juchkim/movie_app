import React, { useState } from "react"
import { useEffect } from "react";
import styled from "styled-components";

// 이미 스타이릴이 된 element를 만들수 있음. 단점으로는 css가 자동완성이 안됨
// 전달받은 변수값으로 스타일을 조건식으로 하고자 하면 함수형으로 작성해야 함
const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.show ? '#090b13' : 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  cursor: pointer;
  img{
    display: block;
    width: 100%;
  }

`



const Nav = (props) => {
  // 스크롤시 네비바의 배경색상을 변경하기 위해서 상태추가함
  const [show, setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY>70){
        setShow(true);
      }else{
        setShow(false);
      }
    });

    return ()=>{
      // window scroll 함수를 컴퍼넌트 될 때 마다(부모 컴퍼넌트의 데이터 변경으로 자식까지 재랜더링) 중복 호출 시 
      // 문제가 발생하니 한번 함수를 호출하면 그 다음은 더 이상 호출 하지 않을 수 있도록 하기위한 작업
      window.removeEventListener('scroll', ()=>{
      })
    }
  },[])

  return (
    <NavWrapper show={show}>
      <Logo>
        <img 
          src="/images/logo.svg" 
          alt="logo" 
          onClick={()=>{window.location.href="/"}}  
        />
      </Logo>
    </NavWrapper>
  )
};

export default Nav;
