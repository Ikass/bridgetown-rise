// progressive enchancement
// document.body.classList.toggle("js-enabled");

const nav = document.querySelector(".site-head");
const hamburger = document.querySelector("#hamburger");

// Toggle aria-expanded attribute
hamburger.addEventListener("click", (e) => {
  // aria-expanded="true" signals that the menu is currently open
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isOpen);
});

// avoid DRY: disabling menu
const disableMenu = () => {
  hamburger.setAttribute("aria-expanded", false);
};

// Hide list on keydown Escape
document.addEventListener("keyup", (e) => {
  if (e.code === "Escape") {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener("click", (e) => {
  const isClickInsideElement = nav.contains(e.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

// attachListeners()
// document.addEventListener("turbo:load", attachListeners)
