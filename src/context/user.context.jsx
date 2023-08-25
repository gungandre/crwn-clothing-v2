import { createContext, useState, useEffect, useReducer } from "react";
import {
  onAuthSatteChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";
// nilai default
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

// !cara menggunakan useReducer untuk mengelola state
// reducer mempunyai 2 argumen yaitu state, dan action
// di parameter action biasanya kita mempunyai 2 object lagi yaiut type dan payload, tergantung nama
export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      throw new Error(`unhandled tap ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  // ! disini kita bisa menginisialisasi useReducer dengan parameter pertama function reducer yang kita buat tadi, dan kedua yaitu inisial state dan akan mendapatkan method state dan dispatch
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  // fungsi usestate untuk merender ulang komponen jika ada perubahan di usecontext

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
