var addBtn = document.getElementById("addNew");

addBtn.addEventListener("click", popup);

function popup() {
  var addNewPopup = document.getElementById("addNewPopup");
  // var select = document.getElementById("select");
//   addNewPopup.classList.toggle("show1");
  // select.classList.toggle("showSelect");
  $(".ui.modal").modal("show");
}
