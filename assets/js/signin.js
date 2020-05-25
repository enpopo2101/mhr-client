const username1 = "tam98";
const password1 = "123";

var username = document.getElementById("username");
var password = document.getElementById("password");
var signinBtn = document.getElementById("signin");
var storageKey = 'user';
var dataString = localStorage.getItem(storageKey);
var user;

signinBtn.addEventListener("click", signin);

if (dataString) {
    user = JSON.parse(dataString);
} else {
    user = {
        username: '',
        password: ''
    };
}

function signin() {
  var usernameVal = username.value;
  var passwordVal = password.value;
  if (usernameVal == user.username && passwordVal == user.password) {
    // alert("ok");
    // console.log(usernameVal);
    // console.log(passwordVal);
    user.username = usernameVal;
    user.password = passwordVal;
    window.location.href = 'index.html';
    localStorage.setItem(storageKey, JSON.stringify(user));
  } else {
    alert("not ok");
  }
}
