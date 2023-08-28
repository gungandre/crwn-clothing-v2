import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/cart.reducer";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

// fungsi combine reducers untuk menampung semua state didalam object

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});