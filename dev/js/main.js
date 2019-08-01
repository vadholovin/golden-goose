$(document).ready(function () {
    svg4everybody({});
});


/**
 * Menu
 */
$(document).ready(function () {
  let toggleMenu = function () {
    $('.hamburger').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass('is-active');
      $('.mobile-nav').toggleClass('is-active');
    });
  
    $('.mobile-nav a').click(function () {
      $('.mobile-nav').removeClass('is-active');
      $('.hamburger').removeClass('is-active');
    });
  };

  toggleMenu();
});