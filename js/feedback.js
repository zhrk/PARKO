ymaps.ready(init);
var myMap;

function init() {
  myMap = new ymaps.Map("feedback-map", {
    center: [54.086019, 28.310831],
    zoom: 17,
    controls: ["fullscreenControl"]
  });

  var zoomControl = new ymaps.control.ZoomControl({
    options: { position: { right: 20, bottom: 50 } }
  });

  myMap.controls.add(zoomControl);

  var placemark = new ymaps.Placemark(
    [54.086019, 28.310831]
    /* {
      balloonContent: ""
    },
    {
      iconLayout: "default#image",
      iconImageHref: "img/marker.png",
      iconImageSize: [87, 87],
      preset: "twirl#yellowStretchyIcon",
      balloonCloseButton: false,
      hideIconOnBalloonOpen: false
    } */
  );

  myMap.geoObjects.add(placemark);
}
