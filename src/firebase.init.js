// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfeFKYlT1XS6izMgZvl5nMKgOVleVlSGQ",
  authDomain: "digital-photography-5c5f5.firebaseapp.com",
  projectId: "digital-photography-5c5f5",
  storageBucket: "digital-photography-5c5f5.appspot.com",
  messagingSenderId: "179127317967",
  appId: "1:179127317967:web:a33dffaad45958f6064eba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
