// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABHoUlFJX91Sb3vZjc9ARsKbxkn6YGvPs",
  authDomain: "mit-students-db0c3.firebaseapp.com",
  projectId: "mit-students-db0c3",
  storageBucket: "mit-students-db0c3.firebasestorage.app",
  messagingSenderId: "832706126120",
  appId: "1:832706126120:web:c569d2bc26660838c4f01d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export {app,auth}