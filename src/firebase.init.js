// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7vXyCmvBeFDxvLtIUnC5jSWkqXc6kVyE",
  authDomain: "login-reg-form-24244.firebaseapp.com",
  projectId: "login-reg-form-24244",
  storageBucket: "login-reg-form-24244.appspot.com",
  messagingSenderId: "960063871410",
  appId: "1:960063871410:web:5187f55911d189808d2cab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;