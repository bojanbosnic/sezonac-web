import { useState, useEffect, useContext, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import LoadingSpinner from "../components/LoadingSpinner";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        localStorage.setItem("Token", user.accessToken);
        setCurrentUser({
          accessToken: user.accessToken,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
          lastSignIn: user.metadata.lastSignInTime,
        });
      }
      setIsLoading(false);
    });
    return unsub;
  }, [currentUser.accessToken]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
