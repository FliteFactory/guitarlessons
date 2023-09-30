window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger'),
    circle = document.querySelector('.hamburger__circle');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
        circle.classList.toggle('hamburger__circle_inactive');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
            circle.classList.toggle('hamburger__circle_inactive');
        })
    })
})