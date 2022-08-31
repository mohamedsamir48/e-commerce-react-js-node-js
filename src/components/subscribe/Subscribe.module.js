import styled from 'styled-components'

export const Wrapper = styled.div`
width:100%;
height:60vh;
margin-top:20px;
margin-bottom:20px;
display:flex;
justify-content:center;
align-items:center;
`

export const Box = styled.div`
width:50%;
min-width:200px;
height:90%;
display:flex;
flex-direction:column;
justify-content:center;
border-radius:10px;
background:radial-gradient(#915,#011)
`

export const Title = styled.h1`
font-size:30px;
font-weight:700;
color:white;

`

export const InputWrapper = styled.div`
width: 100%;
box-shadow: 0 0 2px black;
display:flex;
justify-content:space-between;
height:50px;
font-size:30px;
align-items:center;`

export const Input = styled.input`
border:none;
outline:none;
width:100%;
height:100%;`

export const Btn =styled.button`
border:none;
outline:none;
background:none;
font-size:30px;
cursor:pointer;
color:white;
`