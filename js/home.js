$(document).ready(function () {
  
  //fullscreen scroll
  $('#fullpage').fullpage({
    navigation: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    sectionSelector: '.fullpage__section',
    anchors: ['1', '2', '3'],
    verticalCentered: false
  });

  //welcome slider
  var welcomeSwiper = new Swiper('.welcome', {
    init: false,
    speed: 500,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  welcomeSwiper.init();

  //add-services hover imgs
  var addServicesSwiper = new Swiper('.add-services__img', {
    init: false,
    effect: 'fade',
    simulateTouch: false
  });

  addServicesSwiper.init();

});