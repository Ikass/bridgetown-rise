import "$styles/index.css";
import * as Turbo from "@hotwired/turbo"

/**
 * Adds support for declarative shadow DOM. Requires your HTML <head> to include:
 * `<meta name="turbo-cache-control" content="no-cache" />`
 */
import * as TurboShadow from "turbo-shadow"

/**
 * Uncomment the line below to add transition animations when Turbo navigates.
 * Use data-turbo-transition="false" on your <main> element for pages where
 * you don't want any transition animation.
 */
import "./turbo_transitions.js"

// Example Shoelace components. Mix 'n' match however you like!
// import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js';
// import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js';
// import "@shoelace-style/shoelace/dist/components/button/button.js"
// import '@shoelace-style/shoelace/dist/components/card/card.js';
// import "@shoelace-style/shoelace/dist/components/icon/icon.js"
// import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

// Use the public icons folder:
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js"
setBasePath("/shoelace-assets")

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}";
import "./external_links";
import "@justinribeiro/lite-youtube";
import '@slightlyoff/lite-vimeo';

console.info("Bridgetown is loaded!");
