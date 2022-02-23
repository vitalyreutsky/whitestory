const burger = document?.querySelector("[data-burgers]");
const nav = document?.querySelector("[data-menus]");

burger?.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
