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
*/
const sections = document.querySelectorAll('section');
const naviList = document.getElementById('navbar__list');

/**
 * function makes sections active when in viewport by add/remove 'your-active-class'
 * Reference: 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 * https://knowledge.udacity.com/questions/85408#96950
 * https://knowledge.udacity.com/questions/66312#66326
*/
function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect(); // define viewbox
        const item = section.getAttribute('id'); // get id Attribute from section
        if (box.top <= 300 && box.bottom >= 200) {
            section.classList.add('your-active-class'); // add 'your-active-class' to the current viewed section
            document.querySelector(`a[href= '#${item}']`).classList.add('navbar__active'); // add 'navbar__active' to the current viewed navbar item
        } else {
            section.classList.remove('your-active-class'); // remove 'your-active-class' from the current not viwed section
            document.querySelector(`a[href= '#${item}']`).classList.remove('navbar__active');  // remove 'navbar__active' from the current viewed navbar item
        }
    }
}

/**
 * call makeActive function on window scroll event
*/
window.addEventListener('scroll', function() {
    makeActive()
});

/**
 * build the navigation with use of createDocumentFragment method for better performance
 * Reference:
 * https://www.w3schools.com/jsref/met_document_createdocumentfragment.asp
 * https://knowledge.udacity.com/questions/817816
*/
function navBar() {
    let fragment = document.createDocumentFragment();
    for (const section of sections) { // loop throug sections
        let navi_li = document.createElement('li'); // create li Element
        let navi_id = section.getAttribute('id'); // get id Attribute from section
        let navi_name = section.getAttribute('data-nav'); // get data-nav Attribute from section
        navi_li.innerHTML = `<a href='#${navi_id}' id='li_${navi_id}' class='menu__link'>${navi_name}</a>`; // add innerHTML content (href, class, text content) to li Element
        fragment.appendChild(navi_li); // append li Element to DocumentFragment

        scrollTo(navi_li, section); // call scrollTo function and pass arguments
    }
    naviList.appendChild(fragment); // append fragment to ul navigation list
}

/**
 * call navBar build function
*/
navBar()

/**
 * scroll to section on link click
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
 * https://www.w3schools.com/jsreF/met_element_scrollintoview.asp
 * https://knowledge.udacity.com/questions/777807
 */
function scrollTo(navi_li, section) {
    navi_li.addEventListener('click', function (event) { // add event listener
        event.preventDefault();
        section.scrollIntoView({behavior: 'smooth'}); // scroll section smooth into view
    });
}