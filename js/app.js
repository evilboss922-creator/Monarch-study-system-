import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// REGISTER FUNCTION
window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("message").innerText = "Please fill all fields";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "👑 Registered Successfully!";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
};

// LOGIN FUNCTION
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("message").innerText = "Please fill all fields";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "🔥 Welcome to Monarch!";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
};
