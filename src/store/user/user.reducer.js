export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "user/SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

// !cara menggunakan useReducer untuk mengelola state
// reducer mempunyai 2 argumen yaitu state, dan action
// di parameter action biasanya kita mempunyai 2 object lagi yaiut type dan payload, tergantung nama
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
