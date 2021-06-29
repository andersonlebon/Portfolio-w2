const cancelIcon = document.querySelector('#cancel-icon');
const menu = document.querySelector('.header');
const humburger = document.querySelector('#hamburger');
const mobList = document.querySelectorAll('.mob-list li');

mobList.forEach((list) => {
  list.addEventListener('click', () => {
    menu.classList.remove('mob-menu');
    menu.classList.remove('show-header');
  });
});

humburger.addEventListener('click', () => {
  menu.classList.add('mob-menu');
  menu.classList.add('show-header');
});

cancelIcon.addEventListener('click', () => {
  menu.classList.remove('mob-menu');
  menu.classList.remove('show-header');
});
