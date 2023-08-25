import {} from "react-redux";
import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import longger from "redux-logger";

import { rootReducer } from "./root-reducer";

// cara kerja logger middleware

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);

  console.log("next State: ", store.getState());
};

// const middlewares = [longger];

const middlewares = [longger];

// Di Redux, fungsi compose adalah utilitas yang digunakan untuk menggabungkan beberapa fungsi atau enhancer menjadi satu fungsi tunggal. Fungsi compose berguna ketika Anda ingin menerapkan beberapa fungsi (middleware atau enhancer) pada store Redux secara berurutan.
// parameter ketiha ada untuk menggunakan middleware di createstore
// fungsi library longger adalah middleware untuk melihat history dari state
const composedEnhanced = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhanced);
