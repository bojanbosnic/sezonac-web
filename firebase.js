// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7uQAqsaEm-sykSCIYcTykkq81DupW2xM",
  authDomain: "project-sezonac.firebaseapp.com",
  projectId: "project-sezonac",
  storageBucket: "project-sezonac.appspot.com",
  messagingSenderId: "495150965627",
  appId: "1:495150965627:web:661df0ba5e2edf1b0453de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
