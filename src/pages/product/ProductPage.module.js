import styled from "styled-components";

export const PageWrapper = styled.div`
width:100%;
height:100%`

export const Wrapper = styled.div`
margin-top:100px;
width:100%;
height:100vh;
display:flex;
flex-wrap:wrap`

export const LeftSide = styled.div`
display:flex;
justify-content:center;
align-items:center;
overflow-y:hidden;
flex:1;
`
export const Img = styled.img`
width:95%;
height:auto;

`

export const RightSide = styled.div`
display:flex;
flex-direction:column;
width:100%;
flex:1;`

export const Info = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:50%;
align-items:start;
text-align:start;
justify-content:space-around;
`

export const Title = styled.h1`
width:100%;
justify-self: start;
font-weight:900;
font-size:32px;
color:black;`

export const Desc = styled.div`
display:flex;
justify-content:start;`


export const Colorr = styled.div`
display:flex;`

export const CircleColor = styled.div`
width: 20px;
height:20px;
margin-left:3px;
border-radius:50%;
border : .5px solid black;
background-color:${props => props.col};
cursor:pointer;
`
export const Size = styled.div`
display:flex;`

export const Select = styled.select``

export const Quantity = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`
export const PlusBtn = styled.button`
outline:none;
border:none;
background:none;
cursor: pointer;`

export const Input = styled.input`
width: 20px;
height:20px;
border-radius:5px;
text-align:center;
`
export const MinusBtn = styled.button`

outline:none;
border:none;
background:none;
cursor: pointer;`
    
export const Option = styled.option``

export const Button = styled.button`
background:#915;
outline:none;
border:none;
cursor:pointer;
box-shadow: 0 0 5px #915;
`

