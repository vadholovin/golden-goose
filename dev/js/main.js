/**
 * #Menu
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
 * #Slider
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
 * #Datepicker
 */
$(document).ready(function () {
  $('#checkin, #checkout').datepicker({
    dateFormat : 'dd MM yy',
  });

  // Calendar
  var months = ($(window).width() < 768) ?  1 : 2;
  $('.js-calendar').datepicker({
    dateFormat : 'dd MM yy',
    numberOfMonths: months,
    buttonImage: '',
  });

  var debounce;
  $(window).resize(function() {
    clearTimeout(debounce);
    if ($(window).width() < 768) {
      debounce = setTimeout(function() {
        debounceDatepicker(1);
      }, 250);
    } else {
      debounce = setTimeout(function() {
        debounceDatepicker(2)
      }, 250);
    }
  }).trigger('resize');

  function debounceDatepicker(num) {
    $('.js-calendar').datepicker('option', 'numberOfMonths', num);
  }
});


/**
 * #Smooth scroll to anchor
 */
(function(){
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 50,
  });
})();


/**
 * #Micromodal init
 */
(function () {
  MicroModal.init();
})();


/**
 * #Animate on scroll
 */
(function () {
  AOS.init({
    once: true,
    duration: 1000,
    easing: 'ease-in-out',
  });
})();


/**
 * #Scroll hamburger
 */
(function($) {

  $(window).scroll(function(){	
    'use strict';	
    var b = $(window).scrollTop();
    
    if( b > 50) {		
      $('.hamburger').addClass('hamburger--scroll');
    } else {
      $('.hamburger').removeClass('hamburger--scroll');
    }
  });
  
})( jQuery );


/**
 * #Form validation
 */
$(document).ready(function () {

  $('#formFeedback').submit(function(e){
    e.preventDefault();

    var form = $('#formFeedback');

    form.validate({
      rules: {
        'user-name': {
          required: true,
          minlength: 3,
          maxlength: 20,
          lettersonly: true,
        },
        'user-email': {
          required: true,
          email: true,
        },
        'user-message': {
          required: true,
          minlength: 10,
        },
      },
      messages: {
        'user-name': {
          required: 'Обязательное поле',
          minlength: jQuery.validator.format('Слишком короткое имя'),
          maxlength: jQuery.validator.format('Слишком длинное имя'),
          lettersonly: jQuery.validator.format('Допускается только текст'),
        },
        'user-email': {
          required: 'Обязательное поле',
          email: 'Укажите правильный имейл',
        },
        'user-message': {
          required: 'Обязательное поле',
          minlength: jQuery.validator.format('Слишком короткий текст'),
        },
      },
    });

    if(form.valid()) {
      $.ajax({
        url : 'feedback.php',
        type: 'POST',
        data: $(this).serialize(),
      }).done(function(res) {
        answer(res);
      });
    }
  });


  // Answers
  function answer(res) {
    var answerTitle = document.querySelector('.modal--answer .answer-title');
    var answerText = document.querySelector('.modal--answer .answer-text');

    var positiveResp = {
      title: 'Спасибо!',
      text: 'Мы скоро свяжемся с Вами'
    };

    var negativeResp = {
      title: 'Произошла ошибка!',
      text: 'Попробуйте позже'
    };

    function hideAnswer() {
      setTimeout(function() {
        MicroModal.close('modal-answer');
        answerTitle.textContent = "";
        answerText.textContent = "";
      }, 3000);
    }

    if(res == "error"){
      answerTitle.textContent = negativeResp.title;
      answerText.textContent = negativeResp.text;
      MicroModal.show('modal-answer');
      hideAnswer();
    }
    if(res == "done"){
      answerTitle.textContent = positiveResp.title;
      answerText.textContent = positiveResp.text;
      MicroModal.show('modal-answer');
      hideAnswer();
    }
  }
});


/**
 * Fancybox init
 */
jQuery(document).ready(function ($) {
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "close"
    ],
  });
});



