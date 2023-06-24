import Home from "../src/routes/home/home.component";
import NavigationBar from "../src/routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "../src/routes/shop/shop.component";
import Checkout from "../src/routes/checkout/checkout.component";
import "./categories.styles.scss";
const App = () => {
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
