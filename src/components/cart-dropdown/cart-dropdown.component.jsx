import {
  CartDropdownContainer,
  CartItemComponent,
  ButtonComponent,
  EmptyMessage,
} from "./cart-dropdown.styles";

import { useCallback } from "react";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";

const CardDropDown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  // setiap komponent di render ulanh, maka function2 yang ada di dalam nya akan ter inisialisasi ulang, yang mana itu membuat performa menjadi menurun jika nanti aplikasi sudah semakin besar
  // tidak seperti hook pada react tidak di inisialisasi ulang
  // maka dari itu useCallback di gunakan untuk agar fucntion atau variable tidak di render ulang dan masih menggunakan function yang sudah ada dalam memori
  // pengatueannya sama seperti useEffect yang paraneter pertama adalah functionnya, dan yang kedua adalah dependecies
  // depedencies array di parameter kedua yang bersangkutan dengan function itu sendiri, seperti contoh jika ada perubahan di depedencies maka function tersebut di render ulang dan mendapatkan value terbaru dari depedencies

  // ! sedangkan use memo tidak akan mengkalkulasi suatu function kembali jika return dari function itu sama seperti sebelumnya

  const checkoutHandler = useCallback(() => {
    navigate("/checkout");
  }, []);

  return (
    <CartDropdownContainer>
      <CartItemComponent>
        {/* jika array kosong/[] di anggap true oleh javascript, maka dari itu kita bisa menggunakan length untuk mengetahui apakah terdapat data ataau tidak karna jika bernilai 0 di anggap false */}
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemComponent>
      <ButtonComponent onClick={checkoutHandler}>
        GO TO CHECKOUT
      </ButtonComponent>
    </CartDropdownContainer>
  );
};

export default CardDropDown;
