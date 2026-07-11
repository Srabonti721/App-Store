// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6j73mRz6durMb8YCOR4bOOduYFp8k0B8",
  authDomain: "app-store-4bd83.firebaseapp.com",
  projectId: "app-store-4bd83",
  storageBucket: "app-store-4bd83.firebasestorage.app",
  messagingSenderId: "15658675281",
  appId: "1:15658675281:web:d2c73bf6feb6310a4f9c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);