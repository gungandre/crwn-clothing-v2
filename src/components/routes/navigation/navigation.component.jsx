import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
// menginport logo crwnlogo menggunakan komponen
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import "./navigation.styles.scss";
import CartIcon from "../../cart-icon/cart-icon.component";
import CardDropDown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../context/cart.context";

import { signOutUser } from "../../../utils/firebase/firebase.utils";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    // memanggil setCurrentUser agar compinent di refresh kembali mnejadi sign in
    // setCurrentUser(null);
  };

  return (
    // fragmennt berfungsi untuk menghilangkan pembungkus elemen dengan <div>, biasa jika membuat elemen kita harus men=mbungkus nya dengan div
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CardDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
