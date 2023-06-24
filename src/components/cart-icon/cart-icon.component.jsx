import {
  ShoppingIcon,
  CartIconCointainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIscartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIscartOpen(!isCartOpen);
  return (
    <CartIconCointainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconCointainer>
  );
};

export default CartIcon;
