// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR7bPv54HFST7SrqJ2rI9qrbyJUOYWXYg",
  authDomain: "laboratorio-033-maof.firebaseapp.com",
  projectId: "laboratorio-033-maof",
  storageBucket: "laboratorio-033-maof.appspot.com",
  messagingSenderId: "275190811056",
  appId: "1:275190811056:web:443e9ffb52b7e932c5ae75",
  measurementId: "G-90T5PV26ZS",
  apiKeyMaps :'AIzaSyDlWCVIkc3lrFnOG777LmZ6AQoMgCb3GGc'
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);