function headerMenuSwitcher () {
    const headerBurger = document.querySelector('.header-burger');
    const header = document.querySelector('header');


    headerBurger.addEventListener('click', () => header.classList.toggle('expandet-menu'))
}

document.addEventListener("DOMContentLoaded", function() {
    headerMenuSwitcher()
});