var map;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 44.609701,
      lng: 12.840961
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

}
google.maps.event.addDomListener(window, 'load', init);