import React, { useEffect, useState } from 'react'
import {Wrapper, Left, Right, Header, Header2, Image, Btn} from './Intro.module'

const Intro = () => {
    const [slide, setSlide] = useState(false)
    const [slide2, setSlide2] = useState(false)
    useEffect(() =>{
        setTimeout(()=>{setSlide(true)},1000)
        setTimeout(()=>{setSlide2(true)},1500)
    },[])
  return (
    <Wrapper>
      <Left>
        <Header slide={slide}>Hello there, It's <span>awesome</span> website</Header>
        <Header  slide={slide2}>You will find Your style</Header>
        <Header  slide={slide}>shop now, pick your style</Header>
        <Btn slide={slide2}>Shop</Btn>
      </Left>
      <Right>
        <Image src={require("../../images/cover1.png")}/>
      </Right>
     
    </Wrapper>
  )
}

export default Intro
