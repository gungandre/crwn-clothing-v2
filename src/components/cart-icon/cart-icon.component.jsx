import {
  ShoppingIcon,
  CartIconCointainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";

import { setIsCartOpen } from "../../store/cart/cart.reducer.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(isCartOpen));
  return (
    <CartIconCointainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconCointainer>
  );
};

export default CartIcon;
