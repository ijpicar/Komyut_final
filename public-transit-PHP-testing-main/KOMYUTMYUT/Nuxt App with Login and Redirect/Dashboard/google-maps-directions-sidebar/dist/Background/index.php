<?php
session_start();

    include("connection.php");
    include("functions.php");

?>

<!DOCTYPE html>
<html>
<head>
<title>Simple Leaflet Map</title>
<meta charset="utf-8" />
<!-- Leaflet CSS/js -->
<link rel="stylesheet" type="text/css" href="lib/leaflet/leaflet.css">
<link rel="stylesheet" type="text/css" href="leaflet-routing-machine.css">
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'><link rel="stylesheet" href="./leaflet-routing-machine.css">

</head>
<body>
	<div id="demo" style="width: 100%; height: 100vh"></div>
	<script type="text/javascript" src="lib/leaflet/leaflet.js"></script>
	<script type="text/javascript" src="leaflet-routing-machine.js"></script>
	
	<script>

		var map = L.map('demo').setView([14.596297226967762, 120.99030075055656], 8);
		var mapLink =
		'<a href="http://openstreetmap.org">OpenStreetMap</a>';
		L.tileLayer(
		'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; ' + mapLink,
		maxZoom: 18,
		}).addTo(map);

// Set the location names to search for
var start_location = localStorage.getItem('addressOneValueTransfer');
var end_location = localStorage.getItem('addressTwoValueTransfer');

// Set up the geocoding API URL for the start location
var start_url = "https://nominatim.openstreetmap.org/search/" + encodeURIComponent(start_location) + "?format=json&limit=1";

// Fetch the start location coordinates from the geocoding API
fetch(start_url)
    .then(response => response.json())
    .then(data => {
        // Extract the start location coordinates from the API response
        var start_lat = data[0].lat;
        var start_lng = data[0].lon;

        // Set up the geocoding API URL for the end location
        var end_url = "https://nominatim.openstreetmap.org/search/" + encodeURIComponent(end_location) + "?format=json&limit=1";

        // Fetch the end location coordinates from the geocoding API
        fetch(end_url)
            .then(response => response.json())
            .then(data => {
                // Extract the end location coordinates from the API response
                var end_lat = data[0].lat;
                var end_lng = data[0].lon;

                // Create the routing control with the new coordinates
                var routing = L.Routing.control({
                    waypoints: [
                        L.latLng(start_lat, start_lng),
                        L.latLng(end_lat, end_lng)
                    ]
                });
                console.log(routing);
                routing.addTo(map);
            });
    });

		routing.addTo(map);

	</script>
</body>