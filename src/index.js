import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

// import { CategoriesProvider } from "./context/products.context";
// import { CartProvider } from "./context/cart.context";

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

// untuk mengaplikasikan redux presist kita bisa import PresistGate dan memberikan props persoistor agar bisa di gunakan

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* props loading pada perisgate untuk memberikan loading saat persist dimuat, bisa menambahkan elemen atau component */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
          <App />
          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
      ]
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
