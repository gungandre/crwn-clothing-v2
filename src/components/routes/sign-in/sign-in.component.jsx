import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRec = await createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);

  const logUserGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const docUserRef = await createUserDocumentFromAuth(user);
    console.log(docUserRef);
  };

  // signInWithGoogleRedirect untuk login menggunakan google tanpa membuka tab baru, karna tanpa membuka tab baru jadi saat kita mengconsole log tidak akan menampilkan data apa2, maka dari itu kita membutuhkan getRedirectResult untuk mengambil respon saat kita login dan menggunakan useeffect untuk mengambil data loginnya
  //   const logUserGoogleRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();

  //     console.log({ user });
  //   };

  return (
    <div>
      <h1>Sign In Compinennt</h1>
      <button onClick={logUserGoogle}>Sign In With Google Popup</button>
      {/* <button onClick={logUserGoogleRedirect}>
        Sign In With Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
