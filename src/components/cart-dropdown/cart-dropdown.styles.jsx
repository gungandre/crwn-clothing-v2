import styled from "styled-components";
import Button from "../button/button.component";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  // maksud dari code di bawah adalah jika di dalam cartDropDownContainer terdapat salah satu dari 3 button di bawah maka terapkan style ini
  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartItemComponent = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const ButtonComponent = styled(Button)`
  margin-top: auto;
  font-size: small;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
