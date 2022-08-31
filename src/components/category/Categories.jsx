import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {Wrapper, Category, Category1} from './Categories.module'


const linkStyle = {
  textDecoration:"none",
  color:"white"
}
const Categories = () => {
    const [showCat, setShowCat] = useState(false)
    const [showCat1, setShowCat1] = useState(false)
    useEffect(()=>{

        window.addEventListener('scroll', () =>{
           const offset = window.scrollY;
            if(offset > 200){
            setTimeout(()=>{
             setShowCat(true)
     }, 1000)
        setTimeout(()=>{
             setShowCat1(true)
         }, 1500)
            }
            else{}
        });
        
    },[])
  return (
    <Wrapper>
     <svg style={{position:"absolute"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fillOpacity="1" d="M0,32L34.3,42.7C68.6,53,137,75,206,74.7C274.3,75,343,53,411,80C480,107,549,181,617,192C685.7,203,754,149,823,144C891.4,139,960,181,1029,192C1097.1,203,1166,181,1234,192C1302.9,203,1371,245,1406,266.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
</svg>

    <Link style={linkStyle} to='shop/men' >
      <Category style={{color:"white", marginTop:"200px"}} show={showCat}>
        <img className="img-category1" src={require("../../images/menCategory.png")} alt="awesome"/>
        <img className="img-category2" src={require("../../images/menCategory2.png")} alt="suit"/>
        <h1>Men</h1>
      </Category>
    </Link>
    <Link  style={linkStyle} to='shop/women' >
      
      <Category1 style={{color:"white"}} show={showCat}>
      <img className="img-category1" src={require("../../images/womenCategory.png")} alt="awesome"/>
      <img className="img-category2" src={require("../../images/womenCategory2.png")} alt="awesome"/>
        <h1>Women</h1>
      </Category1>
      </Link>
    <Link style={linkStyle} to='shop/kids' >

      <Category style={{color:"white"}} show={showCat}>
      <img className="img-category1" src={require("../../images/kidsCategory.png")} alt="awesome"/>
             <h1 style={{justifySelf:"end", width:"100%",textAlign:"end"}}>Kids</h1>
      </Category>
      </Link>
      
<svg style={{width:"100%",position:"absolute", bottom:"0"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fillOpacity="1" d="M0,32L34.3,42.7C68.6,53,137,75,206,74.7C274.3,75,343,53,411,80C480,107,549,181,617,192C685.7,203,754,149,823,144C891.4,139,960,181,1029,192C1097.1,203,1166,181,1234,192C1302.9,203,1371,245,1406,266.7L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
</svg>
    </Wrapper>
  )
}

export default Categories
