// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKacoCVILsLiRrE_e_nLhY75S5LzUmam4",
  authDomain: "eren-commerce.firebaseapp.com",
  projectId: "eren-commerce",
  storageBucket: "eren-commerce.appspot.com",
  messagingSenderId: "929457248222",
  appId: "1:929457248222:web:b685529096402f03a7af4f",
  measurementId: "G-PQPNP9YLG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAnlytics = () => getAnalytics(app);
export const firebasePerformance = () => getPerformance(app);
export const db = getFirestore(app);
