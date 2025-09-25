const open = document.querySelector("img.open");
const close = document.querySelector("img.close");
const menu = document.querySelector("ul.menu");

open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

function openMenu() {
  menu.classList.add("open");
}

function closeMenu() {
  menu.classList.remove("open");
}
