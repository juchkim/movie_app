import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav'
import Category from '../../components/Category'
import Row from '../../components/Row'
import Banner from '../../components/Banner'
import request from '../../api/request'

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &::after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opcaity : 1;
    z-index: -1;
  }
`

const MainPage = () => {
  return (
    <div>
      <Container>
        <Nav/>
        <Banner/>
        <Category/>
        <Row title="Tranding Now" id="TN" fetchUrl={request.fetchTrending}/>
        <Row title="Top Rated" id="TR" fetchUrl={request.fetchTopRated}/>
        <Row title="Action Movies" id="AM" fetchUrl={request.fetchActionMovies}/>
        <Row title="Comedy Movies" id="CM" fetchUrl={request.fetchComedynMovies}/>
      </Container>
    </div>
  )
}

export default MainPage
