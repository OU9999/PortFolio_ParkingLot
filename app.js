const introduce = document.querySelector(".introduce");
const introduceLink = document.querySelector(".introduce--link");
const allLink = document.querySelectorAll(".content-link");

function clickEvent() {
  introduce.classList.toggle("none");
}

introduceLink.addEventListener("click", clickEvent);
