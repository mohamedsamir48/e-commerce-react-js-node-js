import styled from 'styled-components'


export const Wrapper = styled.div`
width:100%;
display:flex;
justify-content:start;
flex-wrap:wrap;
gap:10px;
`

export const Product = styled.div`
width: 200px;
height:300px;

`
export const Image = styled.img`
width:200px;
max-height:250px;
min-height:250px;
min-width:200px;`

export const Skeleton = styled.div`
width:200px;
height:300px;

animation:skeleton 1s ease infinite alternate;
display:flex;
flex-direction:column;
`
export const ImageSkeleton = styled.div`
width:100%;
height:250px;
background:gray;
`
export const TitleSkeleton = styled.div`
width: 70%;
height: 20px;
background:gray;
margin:auto;

`
