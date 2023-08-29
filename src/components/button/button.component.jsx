import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  // function ini karna mengembalikan kompoment makan di kurung dengan tanda ()
  // dan karan ada ternary operatornya jadi tidak isiikan return
  // dan isi {}

  //Fungsi tersebut menggunakan tanda () setelah objek literal karena ia ingin mengembalikan komponen tombol sebagai hasilnya. Dalam JavaScript, tanda kurung () digunakan untuk langsung mengeksekusi fungsi yang didefinisikan tanpa memanggilnya secara terpisah.

  //Dalam kasus ini, objek literal di dalam tanda kurung () berfungsi sebagai ekspresi yang menghasilkan komponen tombol yang akan dikembalikan oleh fungsi. Ekspresi ini secara langsung dievaluasi saat fungsi dipanggil, dan hasilnya, yaitu komponen tombol yang sesuai dengan buttonType, dikembalikan sebagai hasil fungsi
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

// kode di atas sama seperti dibawah ini
// return {
//   [BUTTON_TYPE_CLASSES.base]: BaseButton,
//   [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//   [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
// }[buttonType];

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
