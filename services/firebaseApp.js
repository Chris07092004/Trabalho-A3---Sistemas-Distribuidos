// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoC_1fg5qTzN7b5sMOHQxHb7iEtFWJNns",
  authDomain: "jarvis-e3323.firebaseapp.com",
  projectId: "jarvis-e3323",
  storageBucket: "jarvis-e3323.firebasestorage.app",
  messagingSenderId: "350362134959",
  appId: "1:350362134959:web:06c270bc84bef484a8275a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;