$(document).ready(function() {
  
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

});