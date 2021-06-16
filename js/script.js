const burger = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu__list");

function burgerActive() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

burger.onclick = burgerActive;
