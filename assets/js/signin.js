var signinBtn = document.getElementById("signin");

signinBtn.addEventListener("click", signin);

function signin() {
  var usernameVal = document.getElementById("username").value;
  var passwordVal = document.getElementById("password").value;

  axios
    .post("http://mhr.sytes.net/users/login", {
      username: usernameVal,
      password: passwordVal,
    })
    .then(function (res) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("fullName", res.data.fullName);
      localStorage.setItem("_id", res.data._id);
    })
    .then(() => {
      window.location.href = "index.html";
      localStorage.setItem("status", JSON.stringify("loggedIn"));
    })
    .catch(function (err) {
      console.log(err);
      console.log("not ok");
    });
}