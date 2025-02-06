import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDk2GpesVkcAT6dodNYjfuELG-oafdCJ4",
  authDomain: "pfunajob.firebaseapp.com",
  databaseURL: "https://pfunajob-default-rtdb.firebaseio.com",
  projectId: "pfunajob",
  storageBucket: "pfunajob.firebasestorage.app",
  messagingSenderId: "1064370173146",
  appId: "1:1064370173146:web:da13c0bb985773e0ac61e3",
  measurementId: "G-K6T41B9ZEJ",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
