var map;

function initMap(){

	map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: 41.868446, lng: -87.629557},
          zoom: 8
        });
		
}
google.maps.event.addDomListener(window, 'load', init);
