const header = document.querySelector(".header");

if (window.innerWidth > 1024) {
  window.addEventListener("scroll", function (e) {
    let scroll = this.scrollY;
    if (scroll > 254 && header.clientHeight > 60) {
      header.classList.add("header--active");
      return;
    }
    if (scroll > 254) return;

    const defaultHeight = 100;

    let newHeight = defaultHeight - scroll / 7;
    if (newHeight < 60) newHeight = 60;
    header.classList.remove("header--active");
  });

  header.addEventListener("mouseover", () => {
    clearActiveClasses();

    header.classList.remove("header--active");
  });

  function clearActiveClasses() {
    header.classList.add("header--active");
  }
}
