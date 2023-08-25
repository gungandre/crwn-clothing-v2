import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
// menginport logo crwnlogo menggunakan komponen
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLinks,
} from "./navigation.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CardDropDown from "../../components/cart-dropdown/cart-dropdown.component";
// import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
const NavigationBar = () => {
  // const { currentUser } = useContext(UserContext);

  // useSelector digunakan untuk mengambil nilai state dari store
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async () => {
    await signOutUser();
    // memanggil setCurrentUser agar compinent di refresh kembali mnejadi sign in
    // setCurrentUser(null);
  };

  return (
    // fragmennt berfungsi untuk menghilangkan pembungkus elemen dengan <div>, biasa jika membuat elemen kita harus men=mbungkus nya dengan div
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <NavLinks to={"/shop"}>SHOP</NavLinks>
          {currentUser ? (
            // navkink di style menggunakan styled component dengan parameter Link, tetapi kita bisa memparsing ulang dengan props as dan memberi value dengan nama elemen yang kita mau
            <NavLinks as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLinks>
          ) : (
            <NavLinks to={"/auth"}>SIGN IN</NavLinks>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CardDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
