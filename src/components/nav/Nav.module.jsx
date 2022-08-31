import styled from 'styled-components'

export const Navbar = styled.nav`
display:flex;
top:0;
width:100%;
position:fixed;
transition:all 1s ease;
color:${props => props.sticky ? "white": "white"};
background:${props => props.sticky ? "linear-gradient(to right,#011, #915)": "linear-gradient(to right,#011, #915)"};
/* background:${props => props.sticky ? "radial-gradient(#019, #011)": "none"}; */
height: ${props => props.show ? "90vh": "50px"};
box-shadow:${props => props.sticky ? "0 0 10px #011" : "none"};

align-items:center;
z-index:999;



`
export const Wrapper = styled.div`
display:flex;
width:100%;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
`
export const Brand = styled.h1`
font-size:22px;
font-weight:500;
font-family: 'Ubuntu', sans-serif;
span{
    color:#915;
}
`
export const BtnNav = styled.button`
align-items:center;
border:none;
background:none;
outline:none;
display:none;
font-size:20px;
cursor:pointer;
@media screen and (max-width:966px){
    display:flex;
    justify-self:end;
}
`
export const NavList = styled.ul`
width:70%;
display:flex;
margin-right:50px;
justify-content:space-around;
@media screen and (max-width:966px){
    display:${props => props.show ? "flex" : "none"};
    justify-self:end;
    flex-direction:column;
    justify-content:space-between;
    width:100%;
    height:80%;
    
}
@media screen and (max-width:970px){
    width:75%;

}
`
export const EditList = styled.ul`
position:absolute;

display:${props=> props.edit ? "flex": "none"};
flex-direction:column;
align-items:center;
width:100%;
z-index:9;
justify-content:center;
background:${props => props.sticky ? "#915": "#915"};
border-radius:5px;
`
export const EditItem = styled.li`
width:100%;
list-style:none;
display:flex;
justify-content:center;
align-items:center;
justify-content:center;
padding:10px 5px;
&:hover{
    color: red;
}

`

export const NavItem = styled.li`
list-style:none;
position:relative;
width:100%;
padding:10px;
border-radius:10px;
&:hover{
   box-shadow:0 2px 2px black;
}
@media screen and (max-width:800px){

}
`
export const CartNumber = styled.div`
position:absolute;
height:20px;
width:20px;
background:green;
border-radius: 50%;
top:0;
right:30%;
@media screen and (max-width:965px){
    right:45%;
}
`