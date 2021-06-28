let cancelIcon = document.querySelector("#cancel-icon");
let menu = document.querySelector(".header");
const humburger = document.querySelector("#hamburger");

humburger.addEventListener("click", () => {
  menu.classList.add("mob-menu");
});

cancelIcon.addEventListener("click", function () {
  menu.classList.remove("mob-menu");
  console.log("hello");
});
