import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "amzn-clone-3559d.firebaseapp.com",
  projectId: "amzn-clone-3559d",
  storageBucket: "amzn-clone-3559d.appspot.com",
  messagingSenderId: "464124193419",
  appId: "1:464124193419:web:dda9e9fb0dcd75c2b3828e",
};

export const firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(firebase_app);
