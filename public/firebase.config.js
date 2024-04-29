// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDly4rtMjDgsWIdy3KcrUkBntIfOKzxE9s",
  authDomain: "email-password-auth-4f96b.firebaseapp.com",
  projectId: "email-password-auth-4f96b",
  storageBucket: "email-password-auth-4f96b.appspot.com",
  messagingSenderId: "153629093991",
  appId: "1:153629093991:web:393502bc9abdb91faee4c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;

export default auth ; 
