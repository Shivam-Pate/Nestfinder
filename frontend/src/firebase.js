// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nestfinder-bdfb2.firebaseapp.com",
  projectId: "nestfinder-bdfb2",
  storageBucket: "nestfinder-bdfb2.appspot.com",
  messagingSenderId: "279397569727",
  appId: "1:279397569727:web:aa05da59183e92dbeba20a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);