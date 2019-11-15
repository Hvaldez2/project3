var map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 12.896177,
      lng: 38.687014

    },
    zoom: 3
  });
  //paris
  var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Paris</h1>'+
            '<div id="bodyContent">'+
            '<p>Paris is the true capital of the arts and sciences. I was lucky to visit in 2012 and in 2015.</p>'+
            '</div>'+
            '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 48.8566,
      lng: 2.3522
    },
    map: map,
    title: 'Paris'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
  
  //barcelona
  var contentStringBarcelona = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Barcelona</h1>'+
            '<div id="bodyContent">'+
            '<p>On a layover, I got to visit the beautiful beaches and visit the still incomplete Sagrada Familia .</p>'+
            '</div>'+
            '</div>';
  var infowindowBarcelona = new google.maps.InfoWindow({
    content: contentStringBarcelona
  });
  var markerBarcelona = new google.maps.Marker({
    position: {
      lat: 41.3851,
      lng: 2.1734
    },
    map: map,
    title: 'Barcelona'
  });
  markerBarcelona.addListener('click', function () {
    infowindowBarcelona.open(map, markerBarcelona);
  });
  
  //Istanbul
  
  var istanbulString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Istanbul</h1>'+
            '<div id="bodyContent">'+
            '<p>By far the best city I have ever visited. It is so cosmopolitan and I met amazing Turkish soldiers who showed me around</p>'+
            '</div>'+
            '</div>';
  var istanbulInfo = new google.maps.InfoWindow({
    content: istanbulString
  });
  var markerIstanbul = new google.maps.Marker({
    position: {
      lat: 41.0082,
      lng: 28.9784
    },
    map: map,
    title: 'Istanbul'
  });
  markerIstanbul.addListener('click', function () {
    istanbulInfo.open(map, markerIstanbul);
  });
  
  //siem riep
  
  var siemreap = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Siem Reap</h1>'+
            '<div id="bodyContent">'+
			'<img class="indeximage" src="./images/cambodia.jpg" title="My Cambodia Vacation" alt="Cambodia" />'+
            '<p>My most recent adventure. Lots to love about this city! Great culture, awesome ancient temples of Angkor Wat, tasty food!</p>'+
            '</div>'+
            '</div>';
  var siemreapinfo = new google.maps.InfoWindow({
    content: siemreap
  });
  var markerSiem = new google.maps.Marker({
    position: {
      lat: 13.3573,
      lng: 103.8540
    },
    map: map,
    title: 'Siem Reap'
  });
  markerSiem.addListener('click', function () {
    siemreapinfo.open(map, markerSiem);
  });
  
  //south Africa
  var joburg = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">South Africa</h1>'+
            '<div id="bodyContent">'+
            '<p>I got to meet lions and go on a safari! Awesome</p>'+
            '</div>'+
            '</div>';
  var joburgInfo = new google.maps.InfoWindow({
    content: joburg
  });
  var markerJoburg = new google.maps.Marker({
    position: {
      lat: -26.2041,
      lng: 28.0473
    },
    map: map,
    title: 'Johanesburg'
  });
  markerJoburg.addListener('click', function () {
    joburgInfo.open(map, markerJoburg);
  });
  
  //Bangkok
  
  var bangkok = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Bangkok</h1>'+
            '<div id="bodyContent">'+
            '<p>Bangkok was a lot of fun! The red light district was amazing  I highly recommend for all college students to attend</p>'+
            '</div>'+
            '</div>';
  var bangkokInfo = new google.maps.InfoWindow({
    content: bangkok
  });
  var markerBangkok = new google.maps.Marker({
    position: {
      lat: 13.7563,
      lng:100.5018
    },
    map: map,
    title: 'Bangkok'
  });
  markerBangkok.addListener('click', function () {
    bangkokInfo.open(map, markerBangkok);
  });
  
  //greece
  var greece = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Lefkada</h1>'+
            '<div id="bodyContent">'+
            '<p>This was the craziest place Ive been too, id rather not talk about it....</p>'+
            '</div>'+
            '</div>';
  var greekInfo = new google.maps.InfoWindow({
    content: greece
  });
  var markerGreece = new google.maps.Marker({
    position: {
      lat: 38.7066,
      lng:20.6407
    },
    map: map,
    title: 'Lefkada'
  });
  markerGreece.addListener('click', function () {
    greekInfo.open(map, markerGreece);
  });
  
  var flightPlanCoordinates = [
          {lat: 48.8566,
      lng: 2.3522},
          {lat: 41.3851,
      lng: 2.1734},
          {lat: 38.7066,
      lng:20.6407},{lat: 41.0082,
      lng: 28.9784},
	  {lat: -26.2041,
      lng: 28.0473},{lat: 13.7563,
      lng:100.5018},{lat: 13.3573,
      lng: 103.8540}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);

}
google.maps.event.addDomListener(window, 'load', init);