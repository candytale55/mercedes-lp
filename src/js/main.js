// Main JavaScript

console.log('Mercedes Landing Page Loaded');

const get = element => document.querySelector(element);

let burgerMenu = get(".burger-menu");
let mainNav = get(".main-nav-list");
let menuClose = get(".menu-close");

burgerMenu.addEventListener("click", () => {
    mainNav.style.display
})