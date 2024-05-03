import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./../../../public/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create new user with email and pass
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email and password
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with Google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login with Facebook
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // forget password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //User Log out
  const userLogout = () => {
    return signOut(auth);
  };

  // user observation
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createNewUser,
    userLogin,
    googleLogin,
    githubLogin,
    forgetPassword,
    userLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
