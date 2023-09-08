import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import NavigationBar from "../src/routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./global-styles";
import "./categories.styles.scss";
import {
  onAuthSatteChangeListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import Spinner from "./components/spinner/spinner.component";

import { setCurrentUser } from "./store/user/user.reducer";

const Shop = lazy(() => import("../src/routes/shop/shop.component"));
const Checkout = lazy(() =>
  import("../src/routes/checkout/checkout.component")
);
const Home = lazy(() => import("../src/routes/home/home.component"));
const Authentication = lazy(() =>
  import("./routes/authentication/authentication.component")
);

// saat aplikasi kita pertama kali di jalankan di browser/di refresh maka semua source seperti komponennt dan lainnya akan di requert oleh browser yang itu membuat resource menjadi banyak, oeh karena itu kita bisa menggunakan react lazy agar komponent itu di load ketika kita membutuhkannya saja seperti kita load komponent shop  saat route di shop.
// lazy ini membuat komponent bersifat asychronus

// dan biasanya lazy dikombinasikan dengan suspense untuk membuat loading saat komponent sedang dimuat

// Suspense adalah fitur yang diperkenalkan dalam React untuk mengelola state loading atau penundaan dalam aplikasi Anda.

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
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
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
    </Suspense>
  );
};

export default App;
