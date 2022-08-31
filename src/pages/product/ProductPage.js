import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import {
  PageWrapper,
  Wrapper,
  LeftSide,
  Img,
  RightSide,
  Info,
  Title,
  Desc,
  Colorr,
  CircleColor,
  Size,
  Quantity,
  PlusBtn,
  Input,
  MinusBtn,
  Select,
  Option,
  Button,
} from "./ProductPage.module";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "./../../components/footer/Footer";
import { addProduct } from "../../redux/cart";
import { useDispatch } from "react-redux";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Product = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  const [item, setItem] = useState({});
  const [itemCart, setItemCart] = useState({});
  const [itemCartPrice, setItemCartPrice] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const getProduct = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `http://localhost:5000/products/${productID}`
      );
      setItem(res.data);
      setItemCart(res.data);
      setItemCartPrice(res.data.price);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = (direction) => {
    if (direction === "plus") {
      if (quantity >= 6) {
        alert("you can't buy more than 6 items from the same product");
      } else {
        setQuantity(quantity + 1);
      }
    } else if (direction === "minus") {
      if (quantity <= 1) {
        alert(`you try to buy ${quantity} product !!!`);
      } else {
        setQuantity(quantity - 1);
      }
    }
  };
  useEffect(() => {
    getProduct();
  }, [location]);
  const addToCart = () => {
    console.log(itemCart);
    if (color.length < 1 || size.length < 1) {
      alert("choose Color and Size");
    } else {
      dispatch(
        addProduct({ ...itemCart, quantity, price: quantity * itemCartPrice })
      );
    }
  };
  const handleColor = () => {};

  if (!isLoading) {
    return (
      <PageWrapper>
        <Nav />
        <Wrapper>
          <LeftSide>
            {!isLoading ? (
              <Img src={require(`../../images/products${item.img}`)} />
            ) : (
              "image here"
            )}
          </LeftSide>
          <RightSide>
            {item.title ? (
              <Info>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Colorr>
                  Choose Color:
                  {item.colors.map((col, index) =>
                    color === col ? (
                      <CircleColor
                        style={{ border: `1px dashed red ` }}
                        key={index}
                        onClick={() => {
                          setItemCart({ ...itemCart, colors: col });
                          setColor(col);
                        }}
                        col={col}
                      ></CircleColor>
                    ) : (
                      <CircleColor
                        key={index}
                        onClick={() => {
                          setItemCart({ ...itemCart, colors: col });
                          setColor(col);
                        }}
                        col={col}
                      ></CircleColor>
                    )
                  )}
                </Colorr>
                <Size>
                  Choose Size:
                  <Select
                    onChange={(e) => {
                      setItemCart({ ...itemCart, size: [e.target.value] });
                      setSize([e.target.value]);
                    }}
                  >
                    <Option>Choose a Color</Option>
                    {item.size.map((siz, index) => (
                      <Option key={index}>{siz}</Option>
                    ))}
                  </Select>
                </Size>
                <Quantity>
                  <PlusBtn onClick={() => handleClick("plus")}>
                    <AiFillPlusCircle />
                  </PlusBtn>
                  <Input name="quantity" value={quantity} readOnly />
                  <MinusBtn onClick={() => handleClick("minus")}>
                    <AiFillMinusCircle />
                  </MinusBtn>
                </Quantity>
                <Button onClick={() => addToCart()}>Add to cart</Button>
              </Info>
            ) : (
              <Info>opps, something going wrong</Info>
            )}
          </RightSide>

          <Footer position={true} />
        </Wrapper>
      </PageWrapper>
    );
  } else {
    return "Wait a minute";
  }
};

export default Product;
