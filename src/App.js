import Home from "../src/routes/home/home.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavigationBar from "../src/routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "../src/routes/shop/shop.component";
import Checkout from "../src/routes/checkout/checkout.component";
import "./categories.styles.scss";
import {
  onAuthSatteChangeListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthSatteChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      const pickedUser =
        user &&
        (({ accessToken, email, displayName }) => ({
          accessToken,
          email,
          displayName,
        }))(user);

      // karna user mengembalikan constructor function yang tidak bisa di terima oleh middleware relialize, maka valu user kita pecah di variable pivkedUser
      // kode pickedUser sama dengan pickedUser(user), cuma ini adalah sortHandnya

      dispatch(setCurrentUser(pickedUser));
    });
    return unsubscribe;
    // dispatch menjadi parameter kedua untuk menghilangkan warning di eslint
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" Component={NavigationBar}>
        {/* fungsi index berguna untuk jika mengakses route / akan merender dua komponent yaitu navigationbar dan home */}
        <Route index element={<Home />} />
        {/* path shp adalah chilldren dari Home, agar bisa dirender 2 component tersebut  saat mengakses route /home/shop bisa menginport outlet di dalam komponent home dan menaruh outlet/chilldre shop sesuai yang kitas inginkan */}

        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
