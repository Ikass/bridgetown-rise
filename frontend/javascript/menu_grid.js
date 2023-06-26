// progressive enchancement
document.body.classList.toggle('js-enabled');

const nav = document.querySelector("#primary-nav");
const hamburger = document.querySelector("#hamburger");

// document.addEventListener('DOMContentLoaded', function(event) 
// {
//     // const hamburger = document.getElementById('hamburger');
//     // If JS is enabled, it will un-expand the hamburger
//     hamburger.setAttribute('aria-expanded', 'false');
//     hamburger.onclick = function()
//     {   
//         if(this.getAttribute('aria-expanded') == 'false')
//         {
//             this.setAttribute('aria-expanded', 'true');
//         }else{
//             this.setAttribute('aria-expanded', 'false');
//         }
//     }
// });


// hamburger.addEventListener('click', () => {
//         if(this.getAttribute('aria-expanded') == 'false')
//         {
//             this.setAttribute('aria-expanded', 'true');
//         }else{
//             this.setAttribute('aria-expanded', 'false');
//         }
// })

// hamburger.addEventListener('click', () => {
// //     // mobileMenu.classList.toggle('active');
// //     // hamburger.classList.toggle('active');
//     console.info("clicked!");

//     // Toggle Aria-Expanded Attribute True / False
//     const isOpen = hamburger.getAttribute('aria-expanded') === "true"

//     if (isOpen) {
//         hamburger.setAttribute('aria-expanded', 'false');
//     } else {
//         hamburger.setAttribute('aria-expanded', 'true');
//     }
// });


// Toggle aria-expanded attribute
hamburger.addEventListener('click', e => {
    // aria-expanded="true" signals that the menu is currently open
    const isOpen = hamburger.getAttribute('aria-expanded') === "true"
    hamburger.setAttribute('aria-expanded', !isOpen);
  });



// function attachListeners () {
//     const hamburger = document.querySelector("#hamburger")
//     const nav = document.querySelector("#primary-nav");
//     hamburger.addEventListener('click', handleHamburgerClick)
    
//     function handleHamburgerClick (e) {
//     const hamburger = e.currentTarget
//     // aria-expanded="true" signals that the menu is currently open
//         const isOpen = hamburger.getAttribute('aria-expanded') === "true"
//         // hamburger.setAttribute('aria-expanded', !isOpen);
//         if (isOpen) {
//             hamburger.setAttribute('aria-expanded', 'false');
//         } else {
//             hamburger.setAttribute('aria-expanded', 'true');
//         }
//       }
// }
    
// attachListeners()
// document.addEventListener("turbo:load", attachListeners)

// avoid DRY: disabling menu
const disableMenu = () => {
    hamburger.setAttribute('aria-expanded', false);
  };
  
// Hide list on keydown Escape
document.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
        disableMenu();
    }
});
  
// close if clicked outside of event target
document.addEventListener('click', e => {
    const isClickInsideElement = nav.contains(e.target);
    if (!isClickInsideElement) {
        disableMenu();
    }
});