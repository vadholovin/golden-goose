$(document).ready(function () {
    
});


/**
 * Menu
 */
$(document).ready(function () {
  $('.hamburger').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.mobile-nav').toggleClass('is-active');
  });

  $('.mobile-nav a').click(function () {
    $('.mobile-nav').removeClass('is-active');
    $('.hamburger').removeClass('is-active');
  });
});


/**
 * Slider
 */
$(document).ready(function () {
  var slickElement = $('.js-hero-slider');
  var status = $('.slick-counter');

  slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    if (i < 10) {
      status.text('0' + i);
    } else {
      status.text(i);
    }
  });
  
  slickElement.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    appendDots: '.hero-slider__dots',
  });
});


/**
 * Datepicker
 */
$(document).ready(function () {
  $('#checkin, #checkout').datepicker({
    dateFormat : 'dd MM yy',
  });
});


/**
 * Smooth scroll to anchor
 */
(function(){

  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 50,
  });

})();

/*------------------------------------*\
  #Scroll Navbar
\*------------------------------------*/

(function($) {

  $(window).scroll(function(){	
    "use strict";	
    var b = $(window).scrollTop();
    
    if( b > 50) {		
      $(".hamburger").addClass("hamburger--scroll");
    } else {
      $(".hamburger").removeClass("hamburger--scroll");
    }
  });
  
})( jQuery );