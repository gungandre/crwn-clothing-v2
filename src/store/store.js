import { configureStore } from "@reduxjs/toolkit";
import { compose, applyMiddleware, createStore } from "redux";

// import {} from "react-redux";
// import { compose, applyMiddleware } from "redux";
// import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import longger from "redux-logger";

import { rootReducer } from "./root-reducer";
// import { loggerMiddleware } from "./middleware/logger";

// // redux persisnt adalah sebuah pustaka yang memungkinkan kita untuk meyimpan semua data di dalam redux ke dalam local storage atau ke tempat lain
// // kalao ingin menyimpan ke local storage bisa import storage dari redux persist
// // object blacklist adalah store mana kita kecualikan, disni saya mengecualikan user dari redux store

// // variable persistConfig untuk config persist
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

// // persist reducer untuk  membuat store dari redux persist agar bisa digunakan dan di panggil dari store redux nanti
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // middleware logger ini seharusnya dipakai hanya saat proses development, bukan production
// // maka dari itu kita bisa menggunakan env untuk mengeceknya

// // karena di dalam array middleware ini akita akan mengisi data lebih dari 1, dan setiap data memiliki kondisi dari env nya, maka kita bisa memfilternya dengan method filter(boolean) yang artinya di dalam array itu terdapat data yang kondisi pengecekannya true dari proses pengecekan env nya

// // file .env tidak ada dalam direktory karena creat-react-app sudah menyiapkan ruang lingkup variable saat npm start dijalankan, jadi tidak usah bingung
const middlewares = [process.env.NODE_ENV !== "production" && longger].filter(
  Boolean
);

// // Di Redux, fungsi compose adalah utilitas yang digunakan untuk menggabungkan beberapa fungsi atau enhancer menjadi satu fungsi tunggal. Fungsi compose berguna ketika Anda ingin menerapkan beberapa fungsi (middleware atau enhancer) pada store Redux secara berurutan.
// // parameter ketiha ada untuk menggunakan middleware di createstore
// // fungsi library longger adalah middleware untuk melihat history dari state

// // untuk emnggunakan redux devtools di chrome kita haarus mengecek kondisi untuk environmentnya seperti code yang ada di composeEnhanced
// // kode composeEhanced dibawah mengecek apakah env tidak production dan terdapat object window, jika true akan mengembalikan window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__, jika tidak akan mengembalikan compose
// const composeEnhanced =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// console.log("compose", window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

// const composedEnhanced = composeEnhanced(applyMiddleware(...middlewares));

// // disini persistedReducer dipanggil agar menjadi store yang bisa di akses nanti
// // rootReducer dihapus dari createStore karna sudah menggunakan persistedReducer

//! redux tolkit secara default memiliki 3 middleware yang sudah di install, dan ada middleware yang selalu mengecek format dari state saat dirubah, seperti contoh object yang kita dapat dari login dan di masukan ke state user tidak bisa di realisasikan
//! maka dari itu kita perlu menimpa middleware default dari redux toolkit dengan cara menambahkan satu middleware saja
//! atau kita bisa menkonfgurasi nya sendiri dengan menambakan funtion di object middleware
// ! serialize adalah middeware default

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefautMiddleware) =>
    getDefautMiddleware({ serializableCheck: false }).concat(middlewares),
  // ! property middleware harus tipe data array, nah untuk mengabungkan dengan custom middleware kita bisa menggunakan concat dengan di caining
});

export const persistor = persistStore(store);
// createStore(
//   persistedReducer,

//   undefined,
//   composedEnhanced
// );

// export const persistor = persistStore(store);
