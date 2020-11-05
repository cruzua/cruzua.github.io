var urlwiki = 'https://uk.wikipedia.org/wiki/';
var urlwikimedia = 'https://upload.wikimedia.org/wikipedia/commons/';


var fortress = L.layerGroup();
function style_gub(feature) { return { weight: 7, opacity: 1, color: '#ae7f2a', dashArray: '3', fillOpacity: 0.33, fillColor: '#ae7f2a' }; };
L.geoJson(polygon_1709, {style: style_gub,}).addTo(fortress).bindPopup( function (layer) {return layer.feature.properties.Name;} );


function styleIcons(feature) {
				 return {icon: L.icon({iconUrl: 'https://cruzua.github.io/svg/' + feature.properties.poi_group + '.svg', iconSize: [32, 32]}),}
			 	 };

// function styleDivIcons(feature) {
// 				 				 return {icon: L.divIcon({ }),}
// 				 			 	 };


function popPlaces(feature, layer) {
		     var popupContent = '<b>' + feature.properties.poi_name + '</b><br>' + feature.properties.poi_opys ;
		     layer.bindPopup(popupContent); };


var places_1709 = L.geoJson(place_1709, {
		    pointToLayer: function (feature, latlng) {
		        return L.marker(latlng, styleIcons(feature));
		    }, onEachFeature: popPlaces
		});

var events_1709 = L.geoJson(event_1709, {
				pointToLayer: function (feature, latlng) {
				    return L.marker(latlng, styleIcons(feature));
				}, onEachFeature: popPlaces
		});

var title = new L.Control({position: 'topleft'});
		title.onAdd = function(map) {
					this._div = L.DomUtil.create("div", "info");
					this.update(); return this._div; };
		title.update = function() {
					this._div.innerHTML = '<div class="d-inline-flex"> <nav class="navbar navbar-expand-lg navbar-light navbar-title bg-light2"> <button class="navbar-toggler toggler-title" type="button" data-toggle="collapse" data-target="#TogglerTitle" aria-controls="TogglerTitle" aria-expanded="false" aria-label="Toggle navigation"> <i class="fa fa-map-marker-alt"></i> </button> <div class="collapse navbar-collapse" id="TogglerTitle"> Шляхами союзної армії Шведського короля Карла ХІІ та Гетьмана України Івана Мазепи: від Гадяча до Переволочної </div> </nav></div>';
					};

var btnInfo = new L.Control({position: 'bottomleft'});
		btnInfo.onAdd = function(map) {
				 this._div = L.DomUtil.create("div", "btnInfo");
				 this.update(); return this._div; };
		btnInfo.update = function() {
			   this._div.innerHTML = '<div class="leaflet-control-about leaflet-bar leaflet-control" aria-haspopup="true"><a type="button" class="btn p-0" data-toggle="modal" data-target="#modalInfo" title="Layers"><i class="fa fa-info"></i></a></div>';
			 	 };

var btnFb = new L.Control({position: 'topleft'});
		btnFb.onAdd = function(map) {
				 this._div = L.DomUtil.create("div", "btnInfo");
				 this.update(); return this._div; };
		btnFb.update = function() {
				 this._div.innerHTML = '<div class="leaflet-control-about leaflet-bar leaflet-control" aria-haspopup="true"><a type="button" class="btn p-0" data-toggle="modal" data-target="#modalInfo" title="Layers"><i class="fab fa-facebook-f"></i></a></div>';
				 };
