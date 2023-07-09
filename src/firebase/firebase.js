// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqAtsohIfSMUhOkcDTkZB_Jfl75IRd_cs",
  authDomain: "app-restaurant-d034b.firebaseapp.com",
  projectId: "app-restaurant-d034b",
  storageBucket: "app-restaurant-d034b.appspot.com",
  messagingSenderId: "53428748171",
  appId: "1:53428748171:web:a0e587eb30ad649308f98e",
  measurementId: "G-G3E4EMDPYJ"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export const firebaseProvider = new GoogleAuthProvider(firebaseApp);
