import styled from 'styled-components'

export const Wrapper = styled.div`
display:grid;
grid-template-columns:14% 86%;
grid-column-gap:70px;
margin-top:80px;
padding:10px 50px;
min-height:100vh;
margin-bottom: 100px;
grid-template-rows:100%;
`


export const LeftSide = styled.div`
display:flex;
flex-direction:column;
justify-content:start;
`
export const CategoryTitle = styled.div`
align-items:start;
font-size: 30px;
`
export const FilterWrapper = styled.div`
display:flex;
width:100%;
height: 50px;
justify-content:center;
align-items:center;
`
export const Title =  styled.h1`
font-size:18px;
font-weight:500
`

export const FilterList = styled.select`
box-shadow:0 0 2px gray;
list-style:none;
width: 100%;
font-size:14px;
width:100px;
height:20px;
justify-content:center;
@media screen and (max-width:810px){
    min-width:100px;
}
`


export const Filter = styled.option`
display: flex;
width:100px;
justify-self:flex-start;
align-items:center;
justify-content:space-between;


`

export const Input = styled.input``

export const RightSide = styled.div`
display:flex;
flex-direction:column;
align-items:center;`

// export const FilterSide = styled.div``