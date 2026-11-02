const menuBtn = document.querySelector(".js-button");
const menuBar = document.querySelector(".menu-bar");
menuBtn.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  document.body.classList.toggle("menu-active");
});
