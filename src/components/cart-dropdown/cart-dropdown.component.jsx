import {
  CartDropdownContainer,
  CartItemComponent,
  ButtonComponent,
  EmptyMessage,
} from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  console.log("halo", Boolean(cartItems));
  return (
    <CartDropdownContainer>
      <CartItemComponent>
        {/* jika array kosong/[] di anggap true oleh javascript, maka dari itu kita bisa menggunakan length untuk mengetahui apakah terdapat data ataau tidak karna jika bernilai 0 di anggap false */}
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemComponent>
      <ButtonComponent onClick={checkoutHandler}>
        GO TO CHECKOUT
      </ButtonComponent>
    </CartDropdownContainer>
  );
};

export default CardDropDown;
