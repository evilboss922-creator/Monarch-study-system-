// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔥 REPLACE THESE WITH YOUR OWN FIREBASE CONFIG
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC3KdTLaCJO3Q95T7brk9QlqNV4_tD8aE",
  authDomain: "monarch-study-system-5a65a.firebaseapp.com",
  projectId: "monarch-study-system-5a65a",
  storageBucket: "monarch-study-system-5a65a.firebasestorage.app",
  messagingSenderId: "668116118466",
  appId: "1:668116118466:web:0fefd362b63b0d10e5c45b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication
export const auth = getAuth(app);
