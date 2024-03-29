import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
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


const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding : 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px soid #f9f9f9;
transitiion: all .2s ease 0s;

&:hover{
  background-color: #f9f9f9;
  color: gray;
  border-color: transparent;
}

`

const Input = styled.input`
  position: fixed;
  left:50%;
  transform : translateX(-50%);
  background-color: rgba(0,0,0, .582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
`;

const Nav = (props) => {
  // 스크롤시 네비바의 배경색상을 변경하기 위해서 상태추가함
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  // location.pathname을 가져옴

  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      handleScroll();
    });

    return ()=>{
      // window scroll 함수를 컴퍼넌트 될 때 마다(부모 컴퍼넌트의 데이터 변경으로 자식까지 재랜더링) 중복 호출 시 
      // 문제가 발생하니 한번 함수를 호출하면 그 다음은 더 이상 호출 하지 않을 수 있도록 하기위한 작업
      window.removeEventListener('scroll', ()=>{
        handleScroll();
      })
    }
  },[])

  const handleScroll = () => {
    if(window.scrollY>70){
      setShow(true);
    }else{
      setShow(false);
    }
  }

  const handleChange = (e)=>{
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
    //검색시 바로 경겨로를 변경함
    //경로가 변경이 되더라도 Nav컴퍼넌트는 모든 페이지에 다 들어있기에 상위는 변경이 없음
    //q파라매타는 useLocation.search로 가져오니, 다른 페이지에서 가져올 수 있음
  }

  return (
    <NavWrapper show={show}>
      <Logo>
        <img 
          src="/images/logo.svg" 
          alt="logo" 
          onClick={()=>{navigate('/')}}  
        />
      </Logo>

      {pathname === "/" ? 
      <Login>Login</Login> : 
      <Input 
      value={searchValue}
      onChange={handleChange}
      className="nav__input"
      type="text" 
      placeholder="검색해주세요."/>}
      {/* 메인이 로그인 페이지이니 pathname으로 메인이면 로그인 버튼, 그 외는 검색칸으로 나오게 하기 */}
    </NavWrapper>
  )
};

export default Nav;

