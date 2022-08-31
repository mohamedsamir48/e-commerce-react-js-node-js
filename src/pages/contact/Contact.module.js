import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin:auto;
margin-top:50px;
width:100%;
height:90vh;
/* box-shadow: 0 0 5px gray; */
/* background-image:url("../../images/slide1.png") */
background:linear-gradient(to left,#915,#011);

`

export const Tape = styled.form`
background:white;
align-self:center;
justify-self:center;
/* margin-top:70px; */
height:280px;
display:flex;
flex-direction:column;
width:50%;
background:none;
box-shadow: 10px 5px 10px #011;
align-items:center;
justify-content:space-around;
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
background:none;
box-shadow: 5px 5px 5px #011;
color:white;
cursor:pointer;
border:none;
`
