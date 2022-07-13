import { useState, useEffect, useContext, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  return signOut(auth);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const value = {
    logout,
    login,
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("auth state changed", user);
      setCurrentUser({
        accessToken: user.accessToken,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      });
      localStorage.setItem("Token", user?.accessToken);
    });
    return () => unsub();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
