let header = document.querySelector(".header__bottom");
let headerTop = document.querySelector(".header__top");
const body = document.body;

function funcEventListener() {
  if (body.clientWidth >= 1024) {
    if (window.scrollY > 190) {
      headerTop.classList.add("hide-header");
      header.classList.add("scrolling-active");
    } else {
      headerTop.classList.remove("hide-header");
      header.classList.remove("scrolling-active");
    }
  } else {
    headerTop.classList.remove("hide-header");
    header.classList.remove("scrolling-active");
  }
}

window.addEventListener("scroll", () => funcEventListener());
window.addEventListener("resize", () => funcEventListener());
