import styled from 'styled-components'

export const Wrapper= styled.div`
position:${props => props.position == true ? "absolute" : 'relative'};
bottom:${props => props.position == true ? '0' : 'null'};
margin-top: 0px;
width: 100%;
height: 20px;
background: linear-gradient(to left, #915, #011);
color:white;
`

