const ParadadeBus = [
    [-75.58200957385765, 6.167201441930452],
    [-75.58263497828978, 6.167610783563385],
    [-75.58332813486705, 6.168108210922234],
    [-75.5841307372247, 6.168533096434455],
    [-75.58537112268216, 6.169263691450091],
    [-75.58641867510612, 6.169937288799075],
    [-75.58726297108744, 6.170470984542215],
    ];
  
   mapboxgl.accessToken =
    'pk.eyJ1IjoiYWFuZ2FyaXRhMjEiLCJhIjoiY2wzM2pkbWp6MDFleDNqbTFieHR3c2o0ZCJ9.wrjyU-FDhG_018C9IdVWrA';
  
    let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-75.58044546268951, 6.16707185517802],
    zoom: 15,
  });
  
   let marker = new mapboxgl.Marker().setLngLat([-75.58063368410406, 6.166289489850527]).addTo(map);
  
  let contador = 0;
  function move() {
      
    setTimeout(() => {
      if (contador >= ParadadeBus.length) return;
      marker.setLngLat(ParadadeBus[contador]);
      contador++;
      move();
    }, 1000);
  }
