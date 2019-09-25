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
 * #Inputmask
 */
$(document).ready(function () {
  $('.js-phone').inputmask('+7 999-999-99-99');
});


/**
 * #Datepicker
 */
$(document).ready(function () {
  $('.js-date').datepicker({
    dateFormat : 'dd.mm.yy',
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


$(document).ready(function () {
  $('.js-increment-plus, .js-increment-minus').click(function (e) { 
    e.preventDefault();
    var target = $(this),
        parent = target.closest('.js-increment'),
        input = parent.find('input'),
        inputVal = +input.val(),
        field = parent.find('.js-increment-value');

    if (target.is('.js-increment-plus')) {
      input.val(++inputVal);
      field.text(inputVal);
    } else if (target.is('.js-increment-minus')) {
      if (inputVal > 0) {
        input.val(--inputVal);
        field.text(inputVal);
      }
    }
  });
});


/**
 * #Micromodal init
 */
(function () {
  var body = document.body;
  var site = document.documentElement;

  MicroModal.init({
    onShow: function () {
      body.classList.add('is-overflowed');
      site.classList.add('is-overflowed');
    },
    onClose: function () {
      body.classList.remove('is-overflowed');
      site.classList.remove('is-overflowed');
    },
  });
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

    var validator = form.validate({
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

  $('#formBooking').submit(function(e){
    e.preventDefault();
    var form = $('#formBooking');

    var validator = form.validate({
      rules: {
        'user-name-booking': {
          required: true,
          minlength: 3,
          maxlength: 20,
          lettersonly: true,
        },
        'user-email-booking': {
          required: true,
          email: true,
        },
        'user-phone-booking': {
          required: true,
          minlength: 10,
        },
        'checkin-booking': {
          required: true,
        },
        'checkout-booking': {
          required: true,
        },
        'guests-adult-booking': {
          required: true,
          min: 1,
        },
        'user-acceptance': {
          required: true,
        },
      },
      messages: {
        'user-name-booking': {
          required: 'Обязательное поле',
          minlength: jQuery.validator.format('Слишком короткое имя'),
          maxlength: jQuery.validator.format('Слишком длинное имя'),
          lettersonly: jQuery.validator.format('Допускается только текст'),
        },
        'user-email-booking': {
          required: 'Обязательное поле',
          email: 'Укажите правильный имейл',
        },
        'user-phone-booking': {
          required: 'Обязательное поле',
          email: 'Укажите правильный телефон',
        },
        'checkin-booking': {
          required: 'Обязательное поле',
        },
        'checkout-booking': {
          required: 'Обязательное поле',
        },
        'guests-adult-booking': {
          required: 'Обязательное поле',
          min: 'Обязательное поле',
        },
        'user-acceptance': {
          required: 'Обязательное поле',
        },
      },
    });

    if(form.valid()) {
      $.ajax({
        url : 'booking.php',
        type: 'POST',
        data: $(this).serialize(),
      }).done(function(res) {
        hideModalForm()
        answer(res);
      });
    }

    function removeOver() {
      var body = document.body;
      var site = document.documentElement;
      body.classList.remove('is-overflowed');
      site.classList.remove('is-overflowed');
    }
  
    function hideModalForm() {
      removeOver();
      MicroModal.close('modal-booking');
    }
  });


  // Answers
  var resp = {
    positiveResp: {
      title: 'Спасибо!',
      text: 'Мы скоро свяжемся с Вами'
    },
    negativeResp: {
      title: 'Произошла ошибка!',
      text: 'Попробуйте позже'
    }
  };

  function answer(res) {
    var answerTitle = document.querySelector('.modal--answer .answer-title');
    var answerText = document.querySelector('.modal--answer .answer-text');

    if(res == "done"){
      answerTitle.textContent = resp.positiveResp.title;
      answerText.textContent = resp.positiveResp.text;
    }
    if(res == "error"){
      answerTitle.textContent = resp.negativeResp.title;
      answerText.textContent = resp.negativeResp.text;
    }

    MicroModal.show('modal-answer');
    hideAnswer();

    function hideAnswer() {
      setTimeout(function() {
        MicroModal.close('modal-answer');
        answerTitle.textContent = "";
        answerText.textContent = "";
      }, 3000);
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
    hash: false,
  });
});



/**
 * Back to top
 */
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 800) {
      $('#back_to_top').removeClass('off');
      $('#back_to_top').addClass('on');
    } else {
      $('#back_to_top').removeClass('on');
      $('#back_to_top').addClass('off');
    }
  });

  $(document).on('click', '#back_to_top', function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });
});



