if(navigator.geolocation){
    console.log('Your browser supports Geolocation API!');
    navigator.geolocation.getCurrentPosition(success);
        maximimAge: 10*60*1000;
        timeout: 0;
} else{
    console.log('Your browser does not supports Geolocation API!');
}

function success(position){
    console.log (position)
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    //sconsole.log(lat, lng);

    //Map bounds
    var southWest = L.latLng(5.996826, 118.400825),
    northEast = L.latLng(20.497456, 126.073096),
    bounds = L.latLngBounds(southWest, northEast);

    //Map options
    let mapOptions = {
        center: [lat, lng],
        zoom: 12,
        minZoom: 6,
        maxZoom: 18,
        //maxBoundsViscosity: 1.0,
    }

    const myAPIKey = "72ba55a8fd634344b11cb5424941a28b";
    const apiKey = "72ba55a8fd634344b11cb5424941a28b";

    //Create a map
    var map = L.map('map', mapOptions)
                .setMaxBounds(bounds);

      const isRetina = L.Browser.retina;

      const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
      const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";


    //Tile layer
    let layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //Add layer
    layer.addTo(map);

    geocodeRouting();
}

function error(error){
    alert('We could not get your current location. Please allow us to success your current location.')
    console.log(error.code);
}

// //Routing API
// const myAPIKey = "72ba55a8fd634344b11cb5424941a28b";
// const fromWaypoint = [14.651530, 120.971443]; // latutude, longitude
// const toWaypoint = [14.601000, 120.989490]; // latitude, longitude
// const url = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(',')}|${toWaypoint.join(',')}&mode=transit&details=instruction_details&apiKey=${myAPIKey}`;

// fetch(url).then(res => res.json()).then(result => {
//     console.log(result);
// }, error => console.log(err));

// //Show result
// L.geoJSON(routeResult, {
//     style: (feature) => {
//       return {
//         color: "rgba(20, 137, 255, 0.7)",
//         weight: 5
//       };
//     }
//   }).bindPopup((layer) => {
//     return `${layer.feature.properties.distance} ${layer.feature.properties.distance_units}, ${layer.feature.properties.time}`
//   }).addTo(map);

// //Route Geometry
// const steps = [];
// routeResult.features[0].properties.legs.forEach((leg, legIndex) => {
//   const legGeometry = routeData.features[0].geometry.coordinates[legIndex];
//   leg.steps.forEach((step, index) => {
//     if (step.from_index === step.to_index) {
//       // destination point
//       return;
//     }

//     const stepGeometry = legGeometry.slice(step.from_index, step.to_index + 1);
//     steps.push({
//       "type": "Feature",
//       "geometry": {
//         "type": "LineString",
//         "coordinates": stepGeometry
//       },
//       properties: step
//     });
//   });
// });

// calculate and display routing:
// from
/* const fromWaypoint = [14.651530, 120.971443]; // latutude, longitude
const fromWaypointMarker = L.marker(fromWaypoint).addTo(map).bindPopup("Monumento, Caloocan City");

// to
const toWaypoint = [14.601000, 120.989490]; // latitude, longitude
const toWaypointMarker = L.marker(toWaypoint).addTo(map).bindPopup("Far Eastern Univertsity, Manila");


const turnByTurnMarkerStyle = {
  radius: 5,
  fillColor: "#fff",
  color: "#555",
  weight: 1,
  opacity: 1,
  fillOpacity: 1
}


fetch(`https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(',')}|${toWaypoint.join(',')}&mode=transit&apiKey=${myAPIKey}`).then(res => res.json()).then(result => {

  // Note! GeoJSON uses [longitude, latutude] format for coordinates
  L.geoJSON(result, {
    style: (feature) => {
      return {
        color: "rgba(20, 137, 255, 0.7)",
        weight: 5
      };
    }
  }).bindPopup((layer) => {
    return `${layer.feature.properties.distance} ${layer.feature.properties.distance_units}, ${layer.feature.properties.time}`
  }).addTo(map);

  // collect all transition positions
  const turnByTurns = [];
  result.features.forEach(feature => feature.properties.legs.forEach((leg, legIndex) => leg.steps.forEach(step => {
    const pointFeature = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": feature.geometry.coordinates[legIndex][step.from_index]
      },
      "properties": {
        "instruction": step.instruction.text
      }
    }
    turnByTurns.push(pointFeature);
  })));

  L.geoJSON({
    type: "FeatureCollection",
    features: turnByTurns
  }, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, turnByTurnMarkerStyle);
    }
  }).bindPopup((layer) => {
    return `${layer.feature.properties.instruction}`
  }).addTo(map);

}, error => console.log(err)); */




//let watcher = navigator.geolocation.watchPosition(success);

//setTimeout(() => {
//    navigator.geolocation.clearWatch(watcher)
//}, 15000);


let iLat,
iLong,
fLat,
fLong;

//function initialPos(){
function geocodeRouting(){

  const geocodingInitialURL = `https://api.geoapify.com/v1/geocode/search?text=monumento%2C%20caloocan%20city&limit=1&filter=countrycode:ph&bias=countrycode:ph&format=json&apiKey=72ba55a8fd634344b11cb5424941a28b`;

  fetch(geocodingInitialURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      iLat = data.results[0].lat;
      iLong = data.results[0].lon;

      iLat = iLat;
      iLong = iLong;

      initialWaypoint = [];
      initialWaypoint[0]= iLat;
      initialWaypoint[1]= iLong;
      
      fromWaypoint = initialWaypoint.join(',');
      
      var fromWaypointMarker = L.marker(fromWaypoint,{
        title: "Starting Point"
      }).addTo(map);

      //Check if working
      //console.log(iLat);
      //console.log(iLong);

      console.log('From: ' + fromWaypoint);

      const geocodingFinalURL = `https://api.geoapify.com/v1/geocode/search?text=P.%20Casal%20Street%2C%20Manila%2C%201001%20National%20Capital%20District%2C%20Philippines&limit=1&filter=countrycode:ph&bias=countrycode:ph&format=json&apiKey=72ba55a8fd634344b11cb5424941a28b`;
  
      fetch(geocodingFinalURL)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          fLat = data.results[0].lat;
          fLong = data.results[0].lon;

          fLat = fLat;
          fLong = fLong;

          finalWaypoint = [];
          finalWaypoint[0]= fLat;
          finalWaypoint[1]= fLong;
          
          toWaypoint = finalWaypoint.join(',');

          //Check if working
          //console.log(fLat);
          //console.log(fLong);

          console.log('To: ' + toWaypoint);
          
            const routingURL = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint}|${toWaypoint}&mode=transit&details=instruction_details&apiKey=72ba55a8fd634344b11cb5424941a28b`;
            
            //API routing testing
            //const routingURL = `https://api.geoapify.com/v1/routing?waypoints=14.658642,120.985043|14.5983169,120.9898132&mode=transit&details=instruction_details&apiKey=72ba55a8fd634344b11cb5424941a28b`;
            
            fetch(routingURL)
              .then(response => response.json())
              .then(result => console.log(result))
              .catch(error => console.log('error', error)); 
        })

        .catch(function(error) {
          console.log('Error:', error);
        });

    })
    .catch(function(error) {
      console.log('Error:', error);
    });

    //.then(response => response.json())
    //Stringify JSON
    //.then(response => console.log(JSON.stringify(response, null, 2)))
    //.then(response => console.log(response))
    //.then(data => {iobj = data;})
    //.catch(error => console.log('error', error));

    //console.log(iobj)
    
    //const response = await fetch(geocodingInitialURL); 
    //var idata = await response.json();

    //console.log(response.results[0].lat);

    //const positionParse = JSON.parse(response); 

    //iLat = idata.results[0].lat;
    //iLong = idata.results[0].lon;

    //Check if working
    //console.log(iLat);
    //console.log(iLong);
  
}

/* function finalPos(){

  const geocodingFinalURL = `https://api.geoapify.com/v1/geocode/search?text=P.%20Casal%20Street%2C%20Manila%2C%201001%20National%20Capital%20District%2C%20Philippines&limit=1&filter=countrycode:ph&bias=countrycode:ph&format=json&apiKey=72ba55a8fd634344b11cb5424941a28b`;
  
  fetch(geocodingFinalURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      fLat = data.results[0].lat;
      fLong = data.results[0].lon; // Extract the value from the specified index

      fLat = fLat;
      fLong = fLong;

      finalWaypoint = [];
      finalWaypoint[0]= fLat;
      finalWaypoint[1]= fLong;
      
      toWaypoint = finalWaypoint.join(',');

      //Check if working
      console.log(fLat);
      console.log(fLong);

      console.log(toWaypoint);
      
        const routingURL = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint}|${toWaypoint}&mode=transit&details=instruction_details&apiKey=72ba55a8fd634344b11cb5424941a28b`;
        
        //API routing testing
        //const routingURL = `https://api.geoapify.com/v1/routing?waypoints=14.658642,120.985043|14.5983169,120.9898132&mode=transit&details=instruction_details&apiKey=72ba55a8fd634344b11cb5424941a28b`;
        
        fetch(routingURL)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error)); 

    })
    .catch(function(error) {
      console.log('Error:', error);
    }); */

    //.then(response => response.json())
    //const response = await fetch(geocodingFinalURL); 
    //var fdata = await response.json();
    //.then(data => {fobj = data;})
    //.catch(error => console.log('error', error));

    //console.log(fobj);

    //fLat = fdata.results[0].lat;
    //fLong = fdata.results[0].lon;
    
    //Check if working
    //console.log(fdata.results[0].lat);
    //console.log(fdata.results[0].lon);

//} 
  

//Sample input
//var iLat = 14.6586418,
//iLong = 120.9850426;

//var fLat = 14.6034279,
//fLong = 120.9848750;

/* function transitRouting(){

initialPos();
finalPos();

const routingURL = `https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint}|${toWaypoint}&mode=transit&details=instruction_details&apiKey=72ba55a8fd634344b11cb5424941a28b`;

//API routing testing
//const routingURL = `https://api.geoapify.com/v1/routing?waypoints=14.658642,120.985043|14.5983169,120.9898132&mode=transit&details=instruction_details&apiKey=72ba55a8fd634344b11cb5424941a28b`;

fetch(routingURL)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

transitRouting(); */

//initialPos();
//finalPos();

