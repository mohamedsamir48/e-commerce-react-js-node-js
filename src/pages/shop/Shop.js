import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import {Wrapper, LeftSide,FilterWrapper,Title, FilterList, Filter, RightSide, CategoryTitle} from './Shop.module'
import Products from './../../components/products/Products';
import { useLocation } from 'react-router-dom';


const Shop = () => {
 const [cat, setCat] = useState("");
 const location = useLocation();
 const [mainCategory, setMainCategory] = useState("")
 const category = location.pathname.split("/")
  const [filters, setFilters] = useState(["all"]);
 const updateCat = (e) =>{

  const value = e.target.value;
  try{
    if(value === "all"){
      setCat('all')
    }
    else{
      setCat(value)

    }
    
  }
  catch(err){
    console.log(err)
  }
  
}
const updateCategory = () =>{
  if(category.length > 2){
    setMainCategory(category[2]);
    
   }
   else{
    setMainCategory("New")
   }
}
useEffect(() => {
  updateCategory();
},[])


  return (
    <div style={{minHeight:"100vh",position:"relative"}}>
    <Nav/>
    <Wrapper>
      <LeftSide>
        <CategoryTitle>{mainCategory}</CategoryTitle>
        <FilterWrapper>
        <Title>Filter</Title>
        <FilterList name="category" onChange={(event)=> updateCat(event)}>
          <Filter value="all">
            All
          </Filter>
          <Filter value="coat">
            Coat
          </Filter>
          <Filter value="shirt">
            Shirt
          </Filter>
          <Filter value="t-shirt">
            T-Shirt
          </Filter>
          <Filter value="icecap">
            Ice cap
          </Filter >
          <Filter value="short">
            Short
          </Filter>
          <Filter value="shoes">
            Shoes
          </Filter>
          <Filter value="dress">
            Dress
          </Filter>
        </FilterList>
        </FilterWrapper>
      </LeftSide>
      <RightSide>
        {/* ==========Products component ============== */}
        <Products category={cat}/>
        {/* ========================================= */}
      </RightSide>
    </Wrapper>
    <Footer position={"true"}/>
    </div>
  )
}

export default Shop
