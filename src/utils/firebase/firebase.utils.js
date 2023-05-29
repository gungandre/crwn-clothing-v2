// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPONyf2ODehE_FNrUG6s0AdY4u4SilK8c",
  authDomain: "crwn-clothing-db-32df8.firebaseapp.com",
  projectId: "crwn-clothing-db-32df8",
  storageBucket: "crwn-clothing-db-32df8.appspot.com",
  messagingSenderId: "169993732090",
  appId: "1:169993732090:web:6d904790b3092e0632ee43",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

// konfigurasi database firestore
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  // membuat collection dan document di firestore
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  // getdoc untuk mengecek apakah collection dan atau document sudah ada di firestore dengan method exists()
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    // jika tidak ada akan membuat data baru di fire store dengan setDoc()
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userDocRef;
};
