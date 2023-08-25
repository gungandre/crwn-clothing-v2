import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log("vewvewve");
    return cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
  }
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItems) => total + cartItems.quantity * cartItems.price,
    0
  )
);

// const newCartCount = newCartItems.reduce(
//   (total, cartItems) => total + cartItems.quantity,
//   0
// );

// const newCartTotal = newCartItems.reduce(
//   (total, cartItems) => total + cartItems.quantity * cartItems.price,
//   0
// );
