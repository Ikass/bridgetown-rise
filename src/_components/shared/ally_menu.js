class ExpandButtonFactory {
  static instances = [];

  static create(selector, customHiddenClass) {
    this.instances = [
      ...this.instances,
      ...Array.from(document.querySelectorAll(selector)).map((el) => {
        if (!(el instanceof HTMLElement)) {
          throw new TypeError("No HTML element found.");
        }

        return new ExpandButton(el, customHiddenClass);
      })
    ];
  }

  static addWindowListener() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        ExpandButtonFactory.instances.forEach((expandButton) => {
          if (
            document.activeElement
              ?.closest("ul")
              ?.closest("li")
              ?.contains(expandButton.el)
          ) {
            expandButton.collapse();
            expandButton.el.focus();
          }
        });
      }
    });
  }
}

class ExpandButton {
  #isAriaExpanded = false;
  #ariaControlsElement = null;
  #firstActionElement = null;
  #hiddenClass = "hidden";

  constructor(el, customHiddenClass) {
    this.el = el;

    this.isAriaExpanded = this.el.getAttribute("aria-expanded") === "true";
    const ariaControlsAttr = this.el.getAttribute("aria-controls");
    this.#ariaControlsElement = ariaControlsAttr
      ? document.getElementById(ariaControlsAttr)
      : null;

    if (!(this.#ariaControlsElement instanceof HTMLElement)) {
      throw new TypeError("No referenced element found.");
    }

    this.#firstActionElement = this.#ariaControlsElement.querySelector(
      "a[href]:not([disabled]), button:not([disabled])"
    );

    if (!(this.#firstActionElement instanceof HTMLElement)) {
      throw new TypeError("No first actionable element found.");
    }

    if (customHiddenClass) {
      this.#hiddenClass = customHiddenClass;
    }

    this.initListeners();
  }

  get isAriaExpanded() {
    return this.#isAriaExpanded;
  }

  set isAriaExpanded(value) {
    this.#isAriaExpanded = value;
    this.el.setAttribute("aria-expanded", this.isAriaExpanded.toString());

    if (this.isAriaExpanded) {
      this.#ariaControlsElement?.classList.remove(this.#hiddenClass);

      setTimeout(() => {
        // focus on first actionable element within the ref element
        this.#firstActionElement?.focus();
      }, 10);
    } else {
      this.#ariaControlsElement?.classList.add(this.#hiddenClass);
    }
  }

  initListeners() {
    this.clickHandler();
    this.collapseOnBlurHandler();
  }

  collapse() {
    this.isAriaExpanded = false;
  }

  expand() {
    this.isAriaExpanded = true;
  }

  toggle() {
    this.isAriaExpanded = !this.isAriaExpanded;
  }

  clickHandler() {
    this.el.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.toggle();
    });

    this.el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  collapseOnBlurHandler() {
    if (this.el.classList.contains("mobile-menu-button")) {
      return;
    }

    this.#ariaControlsElement.addEventListener("focusout", (e) => {
      const currentTarget = e.currentTarget;

      requestAnimationFrame(() => {
        if (!currentTarget.contains(document.activeElement)) {
          this.collapse();
        }
      });
    });
  }
}

const mobileMenuButton = ExpandButtonFactory.create(
  ".mobile-menu-button",
  "hidden-mobile"
);

const menuItemButtons = ExpandButtonFactory.create(".expand-button");

ExpandButtonFactory.addWindowListener();
