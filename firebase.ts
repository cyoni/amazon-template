// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "amzn-clone-3559d.firebaseapp.com",
  projectId: "amzn-clone-3559d",
  storageBucket: "amzn-clone-3559d.appspot.com",
  messagingSenderId: "464124193419",
  appId: "1:464124193419:web:dda9e9fb0dcd75c2b3828e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);