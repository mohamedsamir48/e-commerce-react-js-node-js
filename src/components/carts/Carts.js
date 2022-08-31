import React, { useEffect } from "react";
import {
  Wrapper,
  Btn,
  Desc,
  Title,
  Image,
  ImageContainer,
  Name,
  Quantity,
  Container,
  Price,
} from "./Carts.module";
import { useSelector } from "react-redux";

const Carts = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <Container>
      {products.map((product) => (
        <Wrapper key={toString(product.id)}>
          <ImageContainer>
            {product.img !== undefined ? (
              <Image src={require(`../../images/products${product.img}`)} />
            ) : (
              "isloading"
            )}
          </ImageContainer>

          <Name>
            <Title>Name</Title>
            <Desc>{product.title}</Desc>
          </Name>
          <Quantity>
            <Title>Quantity</Title>
            <Desc>{product.quantity}</Desc>
          </Quantity>
          <Quantity>
            <Title>color</Title>
            <Desc>{product.colors}</Desc>
          </Quantity>
          <Price>
            <Title>Price</Title>
            <Desc>{product.price} L.E</Desc>
          </Price>
          <Btn>remove </Btn>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Carts;
