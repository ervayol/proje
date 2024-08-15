let userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

const alertFunction = (title, message, className = "warning") =>
  `<div class="alert alert-${className} alert-dismissible fade show" role="alert"> <strong> ${title} </strong> ${message} <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>`;

function formHandler(event) {
  event.preventDefault();
  const ÖGE_NAME = document.querySelector("#ögename");

  if (ÖGE_NAME.value) {
    addItem(ÖGE_NAME.value); // gönderdikten sonra sıfırlama
    ÖGE_NAME.value = "";
  } else {
    alertDOM.innerHTML = alertFunction(
      "Başlık bilgisi:",
      "Eksik bilgi giriş yapılamaz"
    );
  }
}

let ögeListDOM = document.querySelector("#ögeList");
function addItem(ögeName) {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = ögeName;
  liDOM.classList.add("list-group-item");
  ögeListDOM.append(liDOM);
}
