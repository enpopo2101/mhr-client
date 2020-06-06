var logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", logout);

if (localStorage.getItem("status") === null) {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("status");
  localStorage.removeItem("token");
  localStorage.removeItem("fullName");
  localStorage.removeItem("_id");
}
