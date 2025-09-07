// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2X3THVraoQUaMsdtVwUvF-DnoLaG4kXM",
  authDomain: "cse3cap-team-b.firebaseapp.com",
  projectId: "cse3cap-team-b",
  storageBucket: "cse3cap-team-b.firebasestorage.app",
  messagingSenderId: "1071871267605",
  appId: "1:1071871267605:web:ac06f8b24199c1bf4c8f1c",
  measurementId: "G-6Q60VEX9WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
