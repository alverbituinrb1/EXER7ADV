// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyBnNPnLtIBaytreNzeU06SDgS_dvI3ueLA",
  authDomain: "adv-exer7-ec1a1.firebaseapp.com",
  projectId: "adv-exer7-ec1a1",
  storageBucket: "adv-exer7-ec1a1.appspot.com",
  messagingSenderId: "899869185675",
  appId: "1:899869185675:web:4c82748d29bad14ea4668e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
