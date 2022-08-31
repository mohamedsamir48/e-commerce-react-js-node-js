import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin:auto;
margin-top:60px;
width:50%;
height:80vh;
/* box-shadow: 0 0 5px gray; */
/* background-image:url("../../images/slide1.png") */
background:linear-gradient(to bottom,#915,#011);

`

export const Tape = styled.form`
background:white;
align-self:center;
justify-self:center;
/* margin-top:70px; */
height:200px;
display:flex;
flex-direction:column;
width:100%;
align-items:center;
justify-content:space-around;
@media screen and (max-width:450px){
    margin-top:100px;
}

`

export const Input = styled.input`
width:200px;
@media screen and (max-width:450px){
    width:100px;
}
`
export const InputMessage = styled.textarea`
width:200px;
@media screen and (max-width:450px){
    width:100px;
}
`
export const Title = styled.h1`
color:white;
`
export const Btn = styled.button`
border-radius:5px;
width: 100px;
background:radial-gradient(#915,#011);
cursor:pointer;
border:none;
`
