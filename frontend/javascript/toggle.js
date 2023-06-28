const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", (e) => {
  // aria-expanded="true" signals that the menu is currently open
  const isOpen = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isOpen);
  // Toggle 'close' class
  hamburger.classList.toggle("close");
});
