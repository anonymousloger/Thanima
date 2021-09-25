const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('nav .links')

console.log(menuToggle)

menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open')
})