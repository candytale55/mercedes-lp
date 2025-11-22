// Main JavaScript

console.log('Mercedes Landing Page Loaded');

// ========== HELPER FUNCTIONS ==========
const get = element => document.querySelector(element);

// ========== MOBILE MENU TOGGLE ==========
let burgerMenu = get(".burger-menu");
let mainNav = get(".main-nav-list");
let menuClose = get(".menu-close");

// Open mobile menu
burgerMenu.addEventListener("click", () => {
    mainNav.style.display = "grid";
})

// Close mobile menu
menuClose.addEventListener("click", () => {
    mainNav.style.display = "none";
})