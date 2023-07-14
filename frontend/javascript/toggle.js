const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#main-nav");

hamburger.addEventListener("click", (e) => {
  // aria-expanded="true" signals that the menu is currently open
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isOpen);
  // Toggle 'close' class to change the icon
  hamburger.classList.toggle("close");
  nav.classList.toggle("visible");
});

// avoid DRY: disabling menu
const disableMenu = () => {
  hamburger.setAttribute("aria-expanded", false);
  hamburger.classList.toggle("close");
  nav.classList.toggle("visible");
};

// Hide list on keydown Escape
document.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    disableMenu();
  }
});

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  disableMenu();
});

// close if clicked outside of event target
document.addEventListener("click", (e) => {
  const isClickInsideElement = nav.contains(e.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});
