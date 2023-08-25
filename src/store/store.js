import {} from "react-redux";
import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import longger from "redux-logger";

import { rootReducer } from "./root-reducer";

// cara kerja logger middleware

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

//   next(action);

//   console.log("next State: ", store.getState());
// };

// redux persisnt adalah sebuah pustaka yang memungkinkan kita untuk meyimpan semua data di dalam redux ke dalam local storage atau ke tempat lain
// kalao ingin menyimpan ke local storage bisa import storage dari redux persist
// object blacklist adalah store mana kita kecualikan, disni saya mengecualikan user dari redux store

// variable persistConfig untuk config persist
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

// persist reducer untuk  membuat store dari redux persist agar bisa digunakan dan di panggil dari store redux nanti
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [longger];

// Di Redux, fungsi compose adalah utilitas yang digunakan untuk menggabungkan beberapa fungsi atau enhancer menjadi satu fungsi tunggal. Fungsi compose berguna ketika Anda ingin menerapkan beberapa fungsi (middleware atau enhancer) pada store Redux secara berurutan.
// parameter ketiha ada untuk menggunakan middleware di createstore
// fungsi library longger adalah middleware untuk melihat history dari state
const composedEnhanced = compose(applyMiddleware(...middlewares));

// disini persistedReducer dipanggil agar menjadi store yang bisa di akses nanti
// rootReducer dihapus dari createStore karna sudah menggunakan persistedReducer
export const store = createStore(
  persistedReducer,

  undefined,
  composedEnhanced
);

export const persistor = persistStore(store);
