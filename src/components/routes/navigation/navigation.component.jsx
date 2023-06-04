import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
// menginport logo crwnlogo menggunakan komponen
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

const NavigationBar = () => {
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
          <Link className="nav-link" to={"/auth"}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
