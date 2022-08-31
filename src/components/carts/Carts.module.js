import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 2px 2px black;
  margin: auto;
  margin-top: 12px;
`;

export const ImageContainer = styled.div``;
export const Title = styled.div`
  color: #003d7a;
  font-weight: 900;
`;

export const Desc = styled.div``;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-self: center;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-self: center;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-self: center;
`;

export const Btn = styled.button`
  border: none;
  border-radius: 5px;
  outline: none;
  background: none;
  box-shadow: 0 0 5px black;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100px;
  height: 150px;
`;
