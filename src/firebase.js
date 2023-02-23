// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCTH075q6b_nDL7Lct3V3MDwMQf0dNuccA",
  authDomain: "chat-721b7.firebaseapp.com",
  projectId: "chat-721b7",
  storageBucket: "chat-721b7.appspot.com",
  messagingSenderId: "189373603497",
  appId: "1:189373603497:web:db837c150bab8885e013b8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
