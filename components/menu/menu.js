const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

//create ref to menu class
const menu = document.querySelector('.menu');
//menu btn ref
const menuButton = document.querySelector('.menu-button');
//click handler and toggle
menuButton.addEventListener('click', toggleMenu);