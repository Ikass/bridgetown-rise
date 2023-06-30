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
