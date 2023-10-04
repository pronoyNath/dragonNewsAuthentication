// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJhnutTRl5N1WB9Y_fObmTq3iFO8lcm1w",
  authDomain: "dragon-news-80d94.firebaseapp.com",
  projectId: "dragon-news-80d94",
  storageBucket: "dragon-news-80d94.appspot.com",
  messagingSenderId: "927521286841",
  appId: "1:927521286841:web:79d8b7d46441adce910968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;