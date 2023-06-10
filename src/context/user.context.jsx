import { createContext, useState, useEffect } from "react";
import {
  onAuthSatteChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// nilai default
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthSatteChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        console.log(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // fungsi usestate untuk merender ulang komponen jika ada perubahan di usecontext

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
