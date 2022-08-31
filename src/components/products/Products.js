import React, { useEffect, useState } from 'react'
import {Wrapper,  Product, Image, Skeleton,TitleSkeleton, ImageSkeleton} from './Products.module'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom';
const Products = (cat) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const [isLoading, setIsloading] = useState(true)
  const getProduct = async () => {
    const category = location.pathname.split("/")[2]
    if(category){
    try{
      setIsloading(true)
      const res = await axios.get(`http://localhost:5000/products?category=${category}`);
      setProducts(res.data)
      setProducts(prev => [...prev].sort((a ,b) => a.createdAt > b.createdAt ? -1: 1))
        setProducts(prev => [...prev].filter((product) => product.categories.includes(category)))

      setTimeout(() => {
        setIsloading(false)
      }, 2000);

    }catch(err){console.log(err)}
    }
    else{
      try{
        setIsloading(true)
        const res = await axios.get('http://localhost:5000/products')
      setProducts(res.data.sort((a,b) => a.createdAt > b.createdAt ? -1 :1));
      // setProducts(prev => [...prev].sort((a,b) => a.createdAt > b.createdAt ? -1:1))
     console.log(products)
        setTimeout(() => {
        setIsloading(false)

      }, 2000);

      }catch(err){
        console.log(err)
      }

    }
   
  }

  useEffect(()=>{
    getProduct()
  },[])

  useEffect(()=>{
    getProduct();
  },[location])

  const getFilteredProduct = async () =>{
    try{
      const res =  await axios.get("http://localhost:5000/products")
      
       setFilteredProducts(products.filter(item => {
        return item.categories.includes(cat.category)
       }
     ))
       
      
   }
   catch(err){
    console.log(err)
   }
  }

  useEffect(  () =>{
  getFilteredProduct();
  },[cat])


  return (
    <Wrapper>
      {isLoading
      ? (Array(8).fill(
        <Skeleton >
          <ImageSkeleton/>
          <TitleSkeleton/>
      </Skeleton>
      ))
      : filteredProducts.length > 0 ? filteredProducts.map(product => (
        <Link  key={toString(product._id)} style={{color:"black",textDecoration:"none"}} to={`/products/${product._id}`} >

        <Product>
            <Image src={require(`../../images/products`.concat(product.img))}/>
            {product.title}
          </Product>
        </Link>
      ))
      :products.map((product=>(
        <Link  key={toString(product._id)} style={{color:"black",textDecoration:"none"}} to={`/products/${product._id}`} >

        <Product>
            <Image src={require(`../../images/products${product.img}`)}/>
            {product.title}
          </Product>
        </Link>
      )))}
          
        </Wrapper>
  )
}

export default Products
