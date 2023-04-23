// Start burger menu
let menuIcon = document.querySelector(".hamburger");
let burgerMenu = document.querySelector(".burgerMenu");
let menuOverlay = document.querySelector(".menuOverlay");
let menuItems = Array.from(document.querySelectorAll(".menuItem"));

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");

  let x = 0.35;
  menuItems.filter((item) => {
    item.classList.toggle("active");
    if (item.id !== "firstItem") {
      item.style = `transition-delay: ${x}s;`;
      item.style = `transition-duration: ${x}s;`;
      x = x * 1.08;
    }
  });
});

menuOverlay.addEventListener("click", () => {
  menuIcon.classList.remove("active");
  burgerMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  menuItems.filter((item) => {
    item.classList.remove("active");
  });
});
// End burger menu
