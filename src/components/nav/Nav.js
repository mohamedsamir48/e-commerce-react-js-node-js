import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {Navbar, Wrapper, Brand, BtnNav, NavList,EditList,EditItem, NavItem, CartNumber} from './Nav.module'
import { AiOutlineBars, AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
const styleLink = {
    textDecoration:"none",
    color:"inherit",
    padding:"5px 20px",
    borderRadius:"5px",
    width:"100%",
}
const editLink = {
  textDecoration:"none",
  color:"inherit",
  borderRadius:"5px",
  display:"flex",
  width:"100%",
  justifyContent:"center",
  alignItems:"center",

}

const brandLink = {
  textDecoration:"none",
  color:"inhert",
  outline:"none"
}
const Nav = () => {
  const[edit, setEdit] = useState(false)
  const[edit2, setEdit2] = useState(false)
const user = true;
const [show, setShow] = useState(false);
  const [sticky, setSticky] = useState(false);
  const quantity = useSelector(state=> state.cart.quantity)

useEffect(()=>{

  window.addEventListener('scroll', () =>{
    if(window.scrollY > 100){
        setSticky(true);
      }
      else{setSticky(false)}
  });
  
},[])
  return (
    <Navbar sticky={sticky} show={show}  >
      <Wrapper>
       <Link style={brandLink} to='/'> <Brand>MoSa <span>Store</span></Brand></Link>
        <BtnNav onClick={() => setShow(!show)}><AiOutlineBars/></BtnNav>

        <NavList show={show}>
            <NavItem><Link style={styleLink} to="/shop">Shop</Link></NavItem>
            <NavItem>
              <Link style={styleLink} to="/shop" onMouseOver={()=>(setEdit(true))} onMouseLeave={()=>(setEdit(false))}>
              edit
              </Link>
              <EditList edit={edit} sticky={sticky} onMouseLeave={()=>(setEdit(false))} onMouseOver={()=>(setEdit(true))}>
                <EditItem>
                  <Link style={editLink} to="/shop/office-lock">office lock</Link></EditItem>
                <EditItem>
                  <Link style={editLink} to="/shop/casual">casual</Link></EditItem>
                
              </EditList>
            </NavItem>
            <NavItem>
            <Link style={styleLink} to="/shop" onMouseOver={()=>(setEdit2(true))} onMouseLeave={()=>(setEdit2(false))}>
              new arrival
              </Link>
              <EditList edit={edit2} sticky={sticky} onMouseLeave={()=>(setEdit2(false))} onMouseOver={()=>(setEdit2(true))}>
                <EditItem>
                  <Link style={editLink}  to="/shop/men">men</Link></EditItem>
                <EditItem>
                  <Link style={editLink} to="/shop/women">women</Link></EditItem>
                <EditItem>
                  <Link style={editLink} to="/shop/kids">kids</Link></EditItem>
                
              </EditList>
             
             </NavItem>
            <NavItem><Link style={styleLink} to="/contact">Contact</Link></NavItem>
            {user 
            ? <NavItem><Link style={styleLink} to="/cart"><AiOutlineShoppingCart style={{ fontSize: "24px" }} /><CartNumber>{quantity }</CartNumber></Link></NavItem>
            :<NavItem><Link style={styleLink} to="/login">Login</Link></NavItem>
            }
        </NavList>

      </Wrapper>
    </Navbar>
  )
}

export default Nav
