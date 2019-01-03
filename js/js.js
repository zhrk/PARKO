$('.header__call-btn').click(function() {
  $('.contacts__popup').addClass('contacts__popup--visible');
});

$('.contacts__close').click(function() {
  $('.contacts__popup').removeClass('contacts__popup--visible');
});