/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");

// build the nav

// function makes sections active when in viewport by add/remove 'your-active-class'
function makeActive() {
    for (let section of sections) {
      let box = section.getBoundingClientRect(); // define viewbox
      if (box.top <= 300 && box.bottom >= 200) {
        section.classList.add('your-active-class'); // add 'your-active-class' to the current section
      } else {
        section.classList.remove('your-active-class'); // remove 'your-active-class' to the current section
      }
    }
  }

// call makeActive on scrolling event
window.addEventListener("scroll", function() {
    makeActive();
  });

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
