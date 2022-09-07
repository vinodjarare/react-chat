// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCNgRDkHwVzC1A9wg_GxdGvv5p6U0cdlWM",
  authDomain: "chat-d4f0a.firebaseapp.com",
  projectId: "chat-d4f0a",
  storageBucket: "chat-d4f0a.appspot.com",
  messagingSenderId: "807915258136",
  appId: "1:807915258136:web:9549632826653d00879e6d",
  measurementId: "G-P29JEX9LDB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const storage = getStorage();
export const db = getFirestore()