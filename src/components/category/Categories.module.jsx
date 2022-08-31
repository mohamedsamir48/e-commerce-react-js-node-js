import styled from 'styled-components'

export const Wrapper = styled.div`
width:100%;
height:1300px;
overflow:hidden;
display:flex;
flex-direction:column;
margin-top:20px;
background:radial-gradient(#915, #011);
width:100%;
position:relative;
`

export const Category1 = styled.div`
margin-top:10px;
margin-bottom:10px;
width: 70%;
height: 300px;
overflow:hidden;
border-radius:3px;
display:flex;
position:relative;
font-size:50px;
align-items:center;

cursor:pointer;
overflow:hidden;
transition: all 1s cubic-bezier(0.42, 0, 0.34, 1.48);
transform:${props => props.show ? "translateX(40%)" : "10px"};
opacity:${props => props.show ? "1" : "0"};
z-index:1;
background:linear-gradient(to right, #915, #011);
box-shadow: 0 0 10px #011;
h1{
    width:100%;
    
}
.img-category1{
    z-index:-1;
    position:absolute;
    height:100%;
    justify-self:start;
    align-self:start;


    }
    .img-category2{
        position:absolute;
        right:0;
        height:100%;

    }
`

export const Category = styled.div`
width: 70%;
height: 300px;
overflow:hidden;
border-radius:3px;
border-radius:3px;
display:flex;
font-size:50px;
align-items:center;
position:relative;
cursor:pointer;
z-index:1;
transition: all 1s cubic-bezier(0.42, 0, 0.34, 1.48);
transform:${props => props.show ? "translateX(10%)" : "translateX(50%)"};
opacity:${props => props.show ? "1" : "0"};
color:black;
background:linear-gradient(to left, #915, #011);
box-shadow: 0 0 10px #011;
h1{
    width:100%;
    align-self:center;
    justify-self:center;
}

.img-category1{
    z-index:-1;
    position:absolute;
    height:100%;
    justify-self:end;
    align-self:start;


    }
    .img-category2{
        position:absolute;
        right:0;
        height:100%;

    }
`