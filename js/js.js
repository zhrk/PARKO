//call popup
$('.header__call-btn').click(function() {
  $('.contacts__popup').addClass('contacts__popup--visible');
});

$('.contacts__close').click(function() {
  $('.contacts__popup').removeClass('contacts__popup--visible');
});

//menu
$('#menu, .header__hamburger').click(function() {
	$('.header__hamburger, .menu__hamburger').toggleClass('active');
  $('.menu__popup').toggleClass('menu__popup--visible');
  $('.menu').toggleClass('menu--visible');
});
$('.menu__close').click(function(){
	$('.menu__popup').removeClass('menu__popup--visible');
  $('.menu').removeClass('menu--visible');
  $('.header__hamburger').removeClass('active');
});
$('.menu__tabs-btn--services').click(function(){
	$('.menu__tabs-btn').removeClass('active');
	$(this).addClass('active');
	$('.menu__popup').addClass('menu__services--visible');
	$('.menu__popup').removeClass('menu__main--visible');
});
$('.menu__tabs-btn--main').click(function(){
	$('.menu__tabs-btn').removeClass('active');
	$(this).addClass('active');
	$('.menu__popup').removeClass('menu__services--visible');
	$('.menu__popup').addClass('menu__main--visible');
});