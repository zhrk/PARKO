$(document).ready(function () {
  
  //fullscreen scroll
  $('#fullpage').fullpage({
    navigation: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    sectionSelector: '.fullpage__section',
    anchors: ['1'],
    /* menu: '#fullpage__menu', */
    verticalCentered: false,
    paddingTop: '100px'
  });

  var welcomeSwiper = new Swiper('.welcome', {
    init: false,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true
  });

  welcomeSwiper.init();

});