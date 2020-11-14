mapboxgl.accessToken =
  'pk.eyJ1Ijoic3RldmVuNzQ2IiwiYSI6ImNraGhyZGg0aDBrZngyc3A5MWtqdXNjanMifQ.q3jTiabTAIMgPLMc-v8h-g';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([19.07, 72.87]);
}

function setupMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 13,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, 'top-left');
}
