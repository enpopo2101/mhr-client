var addBtn = document.getElementById("addNew");


addBtn.addEventListener("click", popup);

function popup() {
    var addNewPopup = document.getElementById("addNewPopup");
    addNewPopup.classList.toggle("show");
}