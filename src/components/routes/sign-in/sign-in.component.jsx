import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logUserGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const docUserRef = await createUserDocumentFromAuth(user);
    console.log(docUserRef);
  };

  return (
    <div>
      <h1>Sign In Compinennt</h1>
      <button onClick={logUserGoogle}>Sign In With Google Popup</button>
    </div>
  );
};

export default SignIn;
