//call popup
$('.header__call-btn').click(function() {
  $('.contacts__popup').addClass('contacts__popup--visible');
});

$('.contacts__close').click(function() {
  $('.contacts__popup').removeClass('contacts__popup--visible');
});

//menu
$('#menu').click(function() {
  $('.menu__popup').toggleClass('menu__popup--visible');
});