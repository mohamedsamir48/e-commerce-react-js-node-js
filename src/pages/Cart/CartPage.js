import React from "react";
import Carts from "../../components/carts/Carts";
import Nav from "../../components/nav/Nav";
import {
  Wrapper,
  CartWrapper,
  CheckOut,
  Part,
  Hr,
  CheckoutBtn,
} from "./CartPage.module";
import { useSelector } from "react-redux";

const CartPage = () => {
  const total = useSelector((state) => state.cart.total);

  return (
    <Wrapper>
      <Nav />
      <CartWrapper>
        <Carts />
        <CheckOut>
          <Part>
            <span>SUBTOTAL:</span> <span>{total} L.E</span>
          </Part>
          <Part>
            <span>SHIPPING:</span> <span>50 L.E</span>
          </Part>
          <Hr />
          <Part>
            <span>TOTAL:</span> <span>{total + 50} L.E</span>
          </Part>
          <Part>
            <CheckoutBtn>Checkout</CheckoutBtn>
          </Part>
        </CheckOut>
      </CartWrapper>
    </Wrapper>
  );
};

export default CartPage;
