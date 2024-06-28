// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-584ea.firebaseapp.com",
  projectId: "mern-blog-584ea",
  storageBucket: "mern-blog-584ea.appspot.com",
  messagingSenderId: "668908342411",
  appId: "1:668908342411:web:bce5c2342ea09275b7188e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

