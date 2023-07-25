import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDEDA0OOXbRvb_oYARfYB2y9d7k0azFd0",
  authDomain: "cardapio-7f6f7.firebaseapp.com",
  projectId: "cardapio-7f6f7",
  storageBucket: "cardapio-7f6f7.appspot.com",
  messagingSenderId: "911950946349",
  appId: "1:911950946349:web:4e61a6528a01b9572118a4",
  measurementId: "G-1867XM13QC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
