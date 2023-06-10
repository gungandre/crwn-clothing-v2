// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

// provider berfungsi untuk login dengan google, ada beberapa pilihan login yang disediakan oleh firebase seperti login facebook dll
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// fungsi getAuth untuk melacak autentikasi yang ada di dalam aplikasi
export const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, googleProvider);
};

// konfigurasi database firestore
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

// fungsi method onAuthStateChange adalah untuk mendapatkan event jika suatu auth berubah di firebase/untuk mendeteksi adanya perubahan auth di firebase
// untuk mengetahui user mana yang sedang login dan mengetahui event jika user masih login atau tidaks
export const onAuthSatteChangeListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
