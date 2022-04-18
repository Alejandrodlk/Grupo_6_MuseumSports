let burguer = document.querySelector('.main-burguer');
let nav_menu = document.querySelector('.nav-bars-container');
let menuClose = document.querySelector('.main-burguerClose')

burguer.addEventListener('click', () => {
    nav_menu.classList.add("active")

})

menuClose.addEventListener('click', () => {
    nav_menu.classList.remove('active')
})