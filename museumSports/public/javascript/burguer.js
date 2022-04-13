let burguer = document.querySelector('.main-burguer');
let nav_menu = document.querySelector('.nav-bars-container');

burguer.addEventListener("click", () => {
    nav_menu.classList.toggle("is-active")
})