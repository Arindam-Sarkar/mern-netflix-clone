// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { FIREBASE_API_KEY } from '../authKeys.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY.toString(),
  authDomain: "mern-netflix-clone-5d475.firebaseapp.com",
  projectId: "mern-netflix-clone-5d475",
  storageBucket: "mern-netflix-clone-5d475.appspot.com",
  messagingSenderId: "894243822215",
  appId: "1:894243822215:web:4fb39e5c90da75a3037622",
  measurementId: "G-2RKPKZ0H6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Pass app to firebase Auth
// firebase auth points to netflix clone application
export const firebaseAuth = getAuth(app)
