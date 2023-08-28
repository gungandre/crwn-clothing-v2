import { createSlice } from "@reduxjs/toolkit";

export const CART_INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found increment quantity
  if (existingCartitem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/new cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItem, cartItemToRemove) => {
  // find the cart iterm to remove
  const existingCartitem = cartItem.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartitem.quantity === 1) {
    // fungsi filter mengembalikan array baru
    return cartItem.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartItem with matching cart item with reduced quantity
  return cartItem.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItem, cartItemToClear) => {
  return cartItem.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

const createCartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen: (state, action) => {
      state.isCartOpen = !action.payload;
    },
    addItemToCart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = createCartSlice.actions;

export const cartReducer = createCartSlice.reducer;

// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   console.log("paload", payload);

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEM:
//       return {
//         ...state,
//         cartItems: payload,
//       };

//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: !payload,
//       };

//     default:
//       return state;
//   }
// };
