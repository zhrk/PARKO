$(document).ready(function () {
  
  //fullscreen scroll
  $('#fullpage').fullpage({
    navigation: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    sectionSelector: '.fullpage__section',
    anchors: ['1', '2', '3', '4', '5', '6', '7'],
    verticalCentered: false,
    responsiveWidth: 1280,
  });

  //welcome slider
  var welcomeSwiper = new Swiper('.welcome', {
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

  //add-services hover imgs
  var addServicesSwiper = new Swiper('.add-services__img', {
    effect: 'fade',
    simulateTouch: false
  });

  $('.add-services__nav-item').on('mouseover', function(event) {
    var hoverSlide = event.target.dataset.addSlide;
    addServicesSwiper.slideTo(hoverSlide);
  });

  //team slider
  var teamSwiper = new Swiper('.team__list', {
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 50,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1919: {
        slidesPerView: 3
      },
      1439: {
        slidesPerView: 4
      },
      1365: {
        slidesPerView: 3
      }
    }
  });

  //clients slider
  var clientsSwiper = new Swiper('.clients__list', {
    speed: 500,
    slidesPerView: 7,
    spaceBetween: 50,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1919: {
        slidesPerView: 6
      },
      1599: {
        slidesPerView: 5
      }
    }
  });

  //feed slider
  var feedSwiper = new Swiper('.feed__list', {
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 40,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1919: {
        slidesPerView: 2
      }
    }
  });

  $('.contacts__form-select').niceSelect();

});