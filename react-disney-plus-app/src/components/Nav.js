import React from "react"
import styled from "styled-components";

// 이미 스타이릴이 된 element를 만들수 있음. 단점으로는 css가 자동완성이 안됨
const NavWrapper = styled.nav`
  position: fiexd;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
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
  return (
    <NavWrapper>
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
