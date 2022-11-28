//header
const header = document.querySelector("header");

//main link
const mainLinks = document.querySelector(".container");
const introduceLink = document.querySelector(".introduce-link");
const speechLink = document.querySelector(".speech-link");
const picsLink = document.querySelector(".pics-link");

//view link
const introduce = document.querySelector(".introduce");
const introduce__left = introduce.querySelector(".fa-arrow-left");
const introduce__right = introduce.querySelector(".fa-arrow-right");
const speech = document.querySelector(".speech");
const speech__left = speech.querySelector(".fa-arrow-left");
const speech__right = speech.querySelector(".fa-arrow-right");
const pics = document.querySelector(".pics");
const pics__left = pics.querySelector(".fa-arrow-left");
const pics__right = pics.querySelector(".fa-arrow-right");

//classname
const CLASSNAME_NONE = "none";
const CLASSNAME_TOP = "top";

//animation
const fadeIn = "fadeIn 0.3s ease-in-out";

function introduceClickEvent() {
  header.classList.toggle(CLASSNAME_TOP);
  mainLinks.classList.toggle(CLASSNAME_NONE);
  introduce.classList.toggle(CLASSNAME_NONE);
  header.style.animation = fadeIn;
  introduce.style.animation = fadeIn;
}
function speechClickEvent() {
  header.classList.toggle(CLASSNAME_TOP);
  mainLinks.classList.toggle(CLASSNAME_NONE);
  speech.classList.toggle(CLASSNAME_NONE);
  header.style.animation = fadeIn;
  speech.style.animation = fadeIn;
}
function picsClickEvent() {
  header.classList.toggle(CLASSNAME_TOP);
  mainLinks.classList.toggle(CLASSNAME_NONE);
  pics.classList.toggle(CLASSNAME_NONE);
  header.style.animation = fadeIn;
  pics.style.animation = fadeIn;
}

function introduceLeftClickEvent() {
  introduce.classList.toggle(CLASSNAME_NONE);
  pics.classList.toggle(CLASSNAME_NONE);
  pics.style.animation = fadeIn;
}
function speechLeftClickEvent() {
  speech.classList.toggle(CLASSNAME_NONE);
  introduce.classList.toggle(CLASSNAME_NONE);
  introduce.style.animation = fadeIn;
}
function picsLeftClickEvent() {
  pics.classList.toggle(CLASSNAME_NONE);
  speech.classList.toggle(CLASSNAME_NONE);
  speech.style.animation = fadeIn;
}

function introduceRightClickEvent() {
  introduce.classList.toggle(CLASSNAME_NONE);
  speech.classList.toggle(CLASSNAME_NONE);
  speech.style.animation = fadeIn;
}

function speechRightClickEvent() {
  speech.classList.toggle(CLASSNAME_NONE);
  pics.classList.toggle(CLASSNAME_NONE);
  pics.style.animation = fadeIn;
}
function picsRightClickEvent() {
  pics.classList.toggle(CLASSNAME_NONE);
  introduce.classList.toggle(CLASSNAME_NONE);
  introduce.style.animation = fadeIn;
}

introduceLink.addEventListener("click", introduceClickEvent);
speechLink.addEventListener("click", speechClickEvent);
picsLink.addEventListener("click", picsClickEvent);

//left
introduce__left.addEventListener("click", introduceLeftClickEvent);
speech__left.addEventListener("click", speechLeftClickEvent);
pics__left.addEventListener("click", picsLeftClickEvent);

//right
introduce__right.addEventListener("click", introduceRightClickEvent);
speech__right.addEventListener("click", speechRightClickEvent);
pics__right.addEventListener("click", picsRightClickEvent);
