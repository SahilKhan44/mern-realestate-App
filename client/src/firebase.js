
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-25347.firebaseapp.com",
  projectId: "mern-estate-25347",
  storageBucket: "mern-estate-25347.appspot.com",
  messagingSenderId: "690993809276",
  appId: "1:690993809276:web:556b08a320eeb64f3a46f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);