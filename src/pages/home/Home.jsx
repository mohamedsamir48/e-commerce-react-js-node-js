import React from 'react'
import Categories from '../../components/category/Categories'
import Footer from '../../components/footer/Footer'
import Intro from '../../components/intro/Intro'
import Nav from '../../components/nav/Nav'
import Subscribe from '../../components/subscribe/Subscribe'
import {Wrapper} from './Home.module'
const Home = () => {
  return (
    <Wrapper>
      <Nav/>
      <Intro/>
      <Categories/>
      <Subscribe/>
      <Footer position={"false"}/>
    </Wrapper>
  )
}

export default Home
