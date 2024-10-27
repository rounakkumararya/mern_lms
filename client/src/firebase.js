// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-lms-e8a09.firebaseapp.com",
  projectId: "mern-lms-e8a09",
  storageBucket: "mern-lms-e8a09.appspot.com",
  messagingSenderId: "963534633289",
  appId: "1:963534633289:web:c5075b2852a20fc3828298",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
