import { createSlice } from "@reduxjs/toolkit";

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "user/SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
