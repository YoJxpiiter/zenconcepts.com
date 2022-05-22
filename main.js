const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav")


function toggleMenu(){
if (nav.classList.contains("nav--visible")) {
  nav.classList.toggle("nav--visible");
  navToggle.innerHTML = "menu";
} else {
  nav.classList.toggle("nav--visible");
  navToggle.innerHTML = "close";
}
}