import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBoPMXdQNe5H_p4pbyRP3VUcbzd10TNM_s",
    authDomain: "my-test-project-b60d9.firebaseapp.com",
    databaseURL: "https://my-test-project-b60d9-default-rtdb.firebaseio.com",
    projectId: "my-test-project-b60d9",
    storageBucket: "my-test-project-b60d9.appspot.com",
    messagingSenderId: "873407531073",
    appId: "1:873407531073:web:2e07d78cba1f71eb105ec0",
    measurementId: "G-GP98ML0S4Y"
  };


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", handleLogin);

const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");

function handleLogin(event) {
  event.preventDefault(); 

  const username = loginUsername.value;
  const password = loginPassword.value;


  const usersRef = ref(database, 'Sponsor_users');
  get(usersRef).then((snapshot) => {
    const users = snapshot.val();
    let loggedIn = false;

    for (let key in users) {
      if (users[key].name === username && users[key].password === password) {
        loggedIn = true;
        break;
      }
    }

    if (loggedIn) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  }).catch((error) => {
    alert("Error during login: " + error.message);
  });

  loginUsername.value = '';
  loginPassword.value = '';
}