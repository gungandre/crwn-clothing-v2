import Home from "./components/routes/home/home.component";
import NavigationBar from "./components/routes/navigation/navigation.component";
import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={NavigationBar}>
        {/* fungsi index berguna untuk jika mengakses route / akan merender dua komponent yaitu navigationbar dan home */}
        <Route index element={<Home />} />
        {/* path shp adalah chilldren dari Home, agar bisa dirender 2 component tersebut  saat mengakses route /home/shop bisa menginport outlet di dalam komponent home dan menaruh outlet/chilldre shop sesuai yang kitas inginkan */}

        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
