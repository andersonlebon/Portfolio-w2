const cancelIcon = document.querySelector('#cancel-icon');
const menu = document.querySelector('.header');
const humburger = document.querySelector('#hamburger');

humburger.addEventListener('click', () => {
  menu.classList.add('mob-menu');
});

cancelIcon.addEventListener('click', () => {
  menu.classList.remove('mob-menu');
});
