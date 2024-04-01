// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDShL-03Mf2NaoS3WX1iRQZl29oJRTYiYU",
  authDomain: "react-disney-plus-app-9a444.firebaseapp.com",
  projectId: "react-disney-plus-app-9a444",
  storageBucket: "react-disney-plus-app-9a444.appspot.com",
  messagingSenderId: "657077281433",
  appId: "1:657077281433:web:3db087b9e025bfbd5b4e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;