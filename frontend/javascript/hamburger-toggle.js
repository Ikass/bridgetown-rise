// borrowed from here:
// https://www.impressivewebs.com/accessible-keyboard-friendly-hamburger-menu-slide-out-navigation/

let myHamburger = document.getElementById("hamburger"),
  myNavMenu = document.getElementById("navMenu"),
  closeNavMenu = document.getElementById("closeNavMenu"),
  main = document.querySelector("main"),
  myMenuLinks = document.querySelectorAll("nav button, nav a"),
  transitionTime = 400, // This matches what's in the CSS for the transition
  overlay = document.createElement("div");

document.body.appendChild(overlay);

function doMenuOpen() {
  myHamburger.setAttribute("aria-expanded", true);
  myNavMenu.classList.remove("vh");
  myNavMenu.classList.remove("hidden");
  main.classList.add("menuOpen");
  myHamburger.classList.add("menuOpen");
  myHamburger.classList.add("hamburger-z");
  window.setTimeout(function () {
    closeNavMenu.focus();
    overlay.classList.add("overlay");
    overlay.addEventListener(
      "click",
      function () {
        doMenuClose();
      },
      false
    );

    document.addEventListener(
      "keyup",
      function (e) {
        // 27 = ESC key
        if (e.Code === 27) {
          doMenuClose();
        }
      },
      false
    );
  }, transitionTime);
}

function doMenuClose() {
  myHamburger.setAttribute("aria-expanded", false);
  myNavMenu.classList.add("hidden");
  main.classList.remove("menuOpen");
  myHamburger.classList.remove("menuOpen");
  overlay.classList.remove("overlay");
  window.setTimeout(function () {
    myNavMenu.classList.add("vh");
    myHamburger.focus();
    overlay.classList.remove("overlay");
    myHamburger.classList.remove("hamburger-z");
  }, transitionTime);
}

myHamburger.addEventListener(
  "click",
  function () {
    if (myNavMenu.classList.contains("hidden")) {
      doMenuOpen();
    } else {
      doMenuClose();
    }
  },
  false
);

closeNavMenu.addEventListener(
  "click",
  function () {
    doMenuClose();
  },
  false
);
