// ACCESSIBILITY
//

// Listen for keyboard user
const handleFirstTab = function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);

// a11y click event. Function returns `true` on click or enter.
const a11yClick = function a11yClick(event) {
  if(event.type === 'keydown') {
    const code = event.charCode || event.keyCode;
    if(code === 13) { // "Enter"
      return true;
    }
  }
  else {
    return false;
  }
}

// NAVIGATION
//

// TODO Remove global variable
const htmlEl = document.body.parentNode;

// Open and close `navbarNav`.
// 1. Toggle nav function expression
// 2. Close nav function expression
// 3. `navToggler` shows/hides `navbarNav` on click. 4. and on `Enter`.
// 5. `navLink` closes `navbarNav` on click.

// 1
const toggleNav = function toggleNav() {
  htmlEl.classList.toggle('nav-is-open');
}
// Accessibility
const a11yToggleNav = function a11yToggleNav(event){
  if(a11yClick(event) === true) {
    toggleNav();
  }
}

// 2
const closeNav = function closeNav() {
  htmlEl.classList.remove('nav-is-open');
}

// Define variables
const navToggler = document.getElementById('navToggler');
const navbarNav = document.getElementById('navbarNav');
const navBrand = document.getElementById('navBrand');

// Add event listeners
navToggler.addEventListener('click', toggleNav); // 3
navToggler.addEventListener('keydown', a11yToggleNav); // 4


navBrand.addEventListener('click', closeNav);

const navLink = document.getElementsByClassName('nav-link'); // 5
// Converts navLink array into individual elements
Array.from(navLink).forEach(function(element) {
  element.addEventListener('click', closeNav);
});

// ----------- Incorporate carefully. TODO: convert to js -----------
// jquery scroll events

// Hide nav on on scroll down
let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = $('#navBar').outerHeight();

// Any scroll event
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    const scrollTop = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class `.nav-up`.
    // This is necessary so you never see what is 'behind' the navbar.
    if (scrollTop > lastScrollTop && scrollTop > navbarHeight){
        // Scroll Down
        $('#navBar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(scrollTop + $(window).height() < $(document).height()) {
          $('#navBar').removeClass('nav-up').addClass('nav-down');
        }
    }

    // Collapse navbarNav on scroll
    if (didScroll) {
      $('html').removeClass('nav-is-open');
    }

    lastScrollTop = scrollTop;
}

// Half through the last section add class .fin to hide `#pgNext`.
$(window).scroll(function() {
  var vh = $(window).height();
  var dh = $(document).height();

  if ($(window).scrollTop() + vh > dh - (vh/2)) {
    $('#pgNext').addClass('fin');
  } else {
    $('#pgNext').removeClass('fin');
  }
})

// FIXED ELEMENTS
// 

// Page change
// 1. `pgNext`` scroll to next section on click.
const pgNext = document.getElementById('pgNext');

let nextPage = function nextPage() {
  let i = 2;
  let sectionEl = document.querySelector('section' + ':nth-of-type(' + i + ')');

  sectionEl.scrollIntoView();
} 

pgNext.addEventListener('click', nextPage); // 1

// MODALS
// For old site. Delete after.

function openModal() {
  document.body.classList.toggle("modal-open");
  document.getElementById("myModal").style.display = "block";
  document.getElementById("myModal").classList.remove("fade-out");
  document.getElementById("myModal").scrollTop = 0;
}

function closeModal() {
  document.body.classList.toggle("modal-open");
  document.getElementById("myModal").classList.add("fade-out");
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(window).scroll(function() {
  $('#topBtn').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("slideLeft");
    }
  });
});
