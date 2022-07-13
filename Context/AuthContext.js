import { useState, useEffect, useContext, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  return signOut(auth);
};


const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const value = {
    register,
    logout,
    login,
    currentUser,
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      localStorage.setItem("Token", user?.accessToken);
    });
    return unsub;
  }, [currentUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};

export default AuthProvider;
