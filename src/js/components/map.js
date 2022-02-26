function init() {
  let center = [52.711400033771106, 25.344502181448522];
  let map = new ymaps.Map("map", {
    center: center,
    zoom: 20,
  });

  let placemark = new ymaps.Placemark(
    center,
    {},
    {
      iconLayout: `default#image`,
      iconImageHref: "img/svg/marker.svg",
      iconImageSize: [30, 30],
      iconImageOffset: [-17, -30],
    }
  );

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

console.log("map");
