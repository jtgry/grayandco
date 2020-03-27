function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
 
function addClass(ele,cls) {  
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
 
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {      
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
    ele.className=ele.className.replace(reg,' ');  
  }
}

// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300
});


// Look for .hamburger
var menuButton = document.querySelector(".menu-button");
var hamburger = document.querySelector(".hamburger");
var mainNav = document.querySelector(".main-nav");
var navItems = document.querySelector(".nav-items");
var mobileNavItems = document.querySelector(".mobile-nav");
var modalButton = document.querySelector(".modal-close");
var scrollUp = document.querySelector(".scroll-to-top");
var subNavTitle = document.querySelector(".sub-nav-title");
var subNavItem = document.querySelectorAll('.sub-nav-item');
var mobileNav = document.getElementById('mobileNav');

var searchForm = document.getElementById('searchForm');
var searchButton = document.getElementById('searchButton');

var body = document.getElementById('root');
var modalFull = document.querySelector(".modal-full");


menuButton.addEventListener("click", function() {
  // Toggle class "is-active"
  
  // Do something else, like open/close menu
  mainNav.classList.toggle("fixed");
  mobileNav.classList.toggle("active");
  menuButton.classList.toggle("active");
  
  setTimeout(() => {
    mobileNavItems.classList.toggle("active");
  }, 500);
});


modalButton.addEventListener("click", function() {
  // Toggle class "is-active"
  modalButton.classList.remove("active");
  navItems.classList.toggle("hidden");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");

});

mobileNav.addEventListener("click", function() {
  // Toggle class "is-active"
  mainNav.classList.toggle("fixed");
  mobileNav.classList.toggle("active");
  menuButton.classList.toggle("active");

  setTimeout(() => {
    mobileNavItems.classList.toggle("active");
  }, 500);

});
document.addEventListener("DOMContentLoaded", function() {
  document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'search' ) ) {
      // Hide the Nav
      navItems.classList.toggle("hidden");
      // Display Search Form
      searchForm.classList.toggle("active");
      // Display Modal Close Button
      modalButton.classList.add("active");

      body.classList.toggle("overflow");
      document.getElementById("searchInput").focus();
    }

    if ( event.target.classList.contains( 'mobile-search' ) ) {
      // Hide the Nav
      navItems.classList.toggle("hidden");
      // Display Search Form
      searchForm.classList.toggle("active");
      // Display Modal Close Button
      modalButton.classList.add("active");

      body.classList.toggle("overflow");
      document.getElementById("searchInput").focus();
    }
    //Sub Page Nav
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     subNavTitle.setAttribute('href', "#subnav");
     if ( event.target.classList.contains( 'sub-nav-title' ) ) {
      // Hide the Nav

      for(var i = 0; i < subNavItem.length; i++){
        subNavItem[i].classList.toggle("active");
      }

      subNavTitle.classList.toggle("active");
    
      }
    }
  }, false);

//
window.addEventListener("scroll",function(){
  var target = document.getElementsByTagName('div');
  if(window.pageYOffset > 500){
    scrollUp.classList.remove("hidden");
  }
  else if(window.pageYOffset < 500){
    scrollUp.classList.add("hidden");
  }
},false);



//Scroll Reveal
window.sr = ScrollReveal({
  delay: 1,
  scale: 0.99,
  viewFactor: 0.4
});
    
  sr.reveal('.block-image', {origin: 'bottom', delay: 1.4, duration: 800});
  sr.reveal('.block-content', {origin: 'bottom', delay: .8, duration: 600});
  sr.reveal('.block-feature-item', {origin: 'bottom', duration: 600, interval: 200, distance: '2em'});
  sr.reveal('.block-showcase-item', {origin: 'bottom', duration: 600, interval: 200, distance: '2em'});
  sr.reveal('.collage-item', {origin: 'bottom', duration: 600, interval: 200, distance: '2em'});
  sr.reveal('.svg', {origin: 'bottom', duration: 600, interval: 200, distance: '2em'});
  sr.reveal('.block-contact', {origin: 'bottom', duration: 600});
  sr.reveal('.block-cta', {origin: 'bottom', duration: 600});
  sr.reveal('.block-header', {origin: 'bottom', duration: 600});
  sr.reveal('.site-footer', {origin: 'bottom', duration: 600});


  // Image Process
  imagesLoaded( document.querySelector('#page'), function( instance ) {
    console.log('all images are loaded');

    var myLazyLoad = new LazyLoad({
      elements_selector: ".lazyload",
      load_delay: 300
    });
  });
  baguetteBox.run('.block-gallery', {
    // Custom options
    animation: 'fadeIn',
    preload: 3
  });

  //FAQ

  var headers = document.querySelectorAll('.dropdown-container header');

  for(var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', openCurrAccordion);
  }

  //Use this as the callback if you would like multiple dropdowns to be open
  function openAccordion(e) {
    var parent = this.parentElement;
    var article = this.nextElementSibling;
    
    if (!parent.classList.contains('open')) {
      parent.classList.add('open');
      article.style.maxHeight = article.scrollHeight + 'px';
    }
    else {
      parent.classList.remove('open');
      article.style.maxHeight = '0px';
    }
  }

  //Use this as the callback if you would like no more than one dropdown to be open
  function openCurrAccordion(e) {
    for(var i = 0; i < headers.length; i++) {
      var parent = headers[i].parentElement;
      var article = headers[i].nextElementSibling;

      if (this === headers[i] && !parent.classList.contains('open')) {
        parent.classList.add('open');
        article.style.maxHeight = article.scrollHeight + 'px';
      }
      else {
        parent.classList.remove('open');
        article.style.maxHeight = '0px';
      }
    }
  }

});