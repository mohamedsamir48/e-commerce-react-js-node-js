import styled from 'styled-components'

export const Wrapper= styled.div`
    display:flex;
    flex-wrap:wrap;
    background: rgba(#f13, 0.7);
    background:#fff;
    @media screen and (max-width:560px){
        margin-top:80px;
    }
`
export const Left = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
flex:1;
transition:all 1s forwards;

`
export const Header = styled.h1`
font-size:25px;
font-family: 'Fira Sans', sans-serif;
color:black;
transition:all 2s cubic-bezier(0.42, 0, 0.34, 1.48);
transform:${props=> props.slide 
?"none"
:"translateX(100%)"
};
opacity:${props=> props.slide 
?"1"
:"0"
};
span{
    color:#915;
}
`

export const Header2 = styled.h1`
font-size:18px;`

export const Right = styled.div`
flex:1;`

export const Image =styled.img`
`
export const Btn = styled.button`
width: 100px;
align-self:center;
border-radius:20px;
justify-content:space-between;
border:none;
cursor: pointer;
font-size:20px;
background:none;
box-shadow: 0 0px 5px #915;

transition:all .5s cubic-bezier(0.42, 0, 0.34, 1.48);
transform:${props=> props.slide 
?"none"
:"translateX(100%)"
};
opacity:${props=> props.slide 
?"1"
:"0"
};
&:hover{
    transform:scale(1.1);
    background: #915;
}
`

