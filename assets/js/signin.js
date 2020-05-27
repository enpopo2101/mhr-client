var username = document.getElementById("username");
var password = document.getElementById("password");
var signinBtn = document.getElementById("signin");

var fullName = document.getElementById("fullname");
var email = document.getElementById("email");
var passwordSignin = document.getElementById("passwordsignin");
var confirmPassword = document.getElementById("confirmpassword");
var signupBtn = document.getElementById("signup");

var storageKey = "users";
var dataString = localStorage.getItem(storageKey);
var users;

signinBtn.addEventListener("click", signin);
signupBtn.addEventListener("click", signup);

if (dataString) {
  users = JSON.parse(dataString);
} else {
  users = [];
}

function signin() {
  var usernameVal = username.value;
  var passwordVal = password.value;
  for (let i = 0; i < users.length; i++) {
    if (usernameVal == users[i].username && passwordVal == users[i].password) {
      window.location.href = "index.html";
      localStorage.setItem("status", JSON.stringify("loggedIn"));
      return false;
    }
  }
  alert("incorrect username or password!!!");
}

function signup() {
  var fullNameVal = fullName.value;
  var emailVal = email.value;
  var passwordSigninVal = passwordSignin.value;
  var confirmPasswordVal = confirmPassword.value;
  var user = {
    username: "",
    email: "",
    password: "",
  };
  if (confirmPasswordVal !== passwordSigninVal) {
    alert("confirm wrong");
    confirmPassword.value = "";
  } else {
    user.username = fullNameVal;
    user.email = emailVal;
    user.password = passwordSigninVal;
    users.push(user);
    localStorage.setItem(storageKey, JSON.stringify(users));
  }
}