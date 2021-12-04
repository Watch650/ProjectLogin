let userInput = document.getElementById("username");
let userPassword = document.getElementById("password");
let registerForm = document.getElementById("signup-form");

registerForm.onsubmit = function (e) {
    e.preventDefault();
  
    let user = {
      username: userInput.value,
      password: userPassword.value
    };

    let checkUsername = localStorage.getItem(user.username);

    if (checkUsername != null) {
      alert("Username has existed");
    } else {
      localStorage.setItem(user.username, JSON.stringify(user));
      alert("Create successfully!");
    }
  };

let userInput1 = document.getElementById("username1");
let userPassword1 = document.getElementById("password1");
let loginForm = document.getElementById("login-form");

loginForm.onsubmit = function (e) {
    e.preventDefault();
  
    let user = JSON.parse(localStorage.getItem(userInput1.value));
    if (user == null) {
      alert("Username Error");
    } 
    else {
        if (user.password != userPassword1.value) {
          alert("Incorrect Username or Password");
        }
        else {
          alert("Login Successfully");
          window.location.href = "index.html"
        }
      }
    }
  
