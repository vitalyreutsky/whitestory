window.addEventListener("scroll", () => {
  let header = document.querySelector(".header__bottom");
  let headerTop = document.querySelector(".header__top");

//  headerTop.classList.toggle("hide", window.scrollY > 190);
  header.classList.toggle("scrolling-active", window.scrollY > 190);
});
