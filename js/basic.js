var urlwiki = 'https://uk.wikipedia.org/wiki/';
var urlwikimedia = 'https://upload.wikimedia.org/wikipedia/commons/';

function style_streets(feature) { return { weight: 7, opacity:  0.33, color: 'red', dashArray: '3' }; }
function style_gub(feature) { return { weight: 4, opacity: 1, color: '#ae7f2a', dashArray: '3', fillOpacity: 0.2, fillColor: '#ae7f2a' }; }
function style_povit(feature) { return { weight: 1, opacity: 1, color: '#ae7f2a', dashArray: '5' }; }

var guberni = L.layerGroup(),
		//diyachi = L.layerGroup(),
		cities = L.layerGroup();

L.geoJson(streets, {style: style_streets,}).addTo(cities).bindPopup( function (layer) {return layer.feature.properties.Name;} ), 
L.geoJson(guber_border, {style: style_gub,}).addTo(guberni).bindPopup('<a title=" " href="' + urlwiki + 'Полтавська_губернія">Межа Полтавської губернії (1802—1925)</a>'),
L.geoJson(povity, {style: style_povit,}).addTo(guberni);


function styleIcons(feature) {
		switch(String(feature.properties['cat_typ'])) {
		  case '191a': return {icon: L.icon({iconUrl: 'icons/stork_a.svg', iconSize: [48, 48]}),}
		       break;
			case '191b': return {icon: L.icon({iconUrl: 'icons/stork_b.svg', iconSize: [48, 48]}),}
		       break;
			case '191c': return {icon: L.icon({iconUrl: 'icons/stork_c.svg', iconSize: [48, 48]}),}
		       break;
			case '191d': return {icon: L.icon({iconUrl: 'icons/stork_d.svg', iconSize: [48, 48]}),}
		       break;
			case '191e': return {icon: L.icon({iconUrl: 'icons/stork_e.svg', iconSize: [48, 48]}),}
			     break;
			case '171': return {icon: L.icon({iconUrl: 'icons/house_a.svg', iconSize: [36, 36]}),}
			     break;
			case '181a': return {icon: L.icon({iconUrl: 'icons/house_c.svg', iconSize: [36, 36]}),}
			     break;
			case '181b': return {icon: L.icon({iconUrl: 'icons/house_d.svg', iconSize: [36, 36]}),}
			     break;
			case '192': return {icon: L.icon({iconUrl: 'icons/rip_a.svg', iconSize: [36, 36]}),}
			     break;
			case '193': return {icon: L.icon({iconUrl: 'icons/monument_d.svg', iconSize: [36, 36]}),}
				   break;
			case '194': return {icon: L.icon({iconUrl: 'icons/monument_a.svg', iconSize: [36, 36]}),}
				   break;
			case '195': return {icon: L.icon({iconUrl: 'icons/house_e.svg', iconSize: [36, 36]}),}
				   break;
			case '196': return {icon: L.icon({iconUrl: 'icons/church_c.svg', iconSize: [36, 36]}),}
				   break;
			case '199': return {icon: L.icon({iconUrl: 'icons/square_a.svg', iconSize: [36, 36]}),}
					 break; }
		}

function popDiachi(feature, layer) {
				 var popupContent = '<div class="card p-0 mb-1" style="background-color: #770f00; width: 310px;"><div class="px-1" style="font-size: 0.9rem; color: #f9e1a3;">📌 Місце народження (населений пункт)</div><!-- Collapse accordion --><div class="accordion" id="accordionСollapse"><!-- Collapsible Group Item # 1 --><div class="card card-collapse"><div class="card-header py-2 card-header-collapse" id="headingOne"><button class="btn btn-link btn-link-collapse font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'
				 + feature.properties.name +
				 '</button></div><div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionСollapse"><div class="card-body card-body-collapse"><p class="pb-2 m-0">📅 '
				 + feature.properties.dt_a + ' – ' + feature.properties.dt_b +
				 '</p><a title="Yurii-mr [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], з Вікісховища" href="https://commons.wikimedia.org/wiki/File:' + feature.properties.ID_P + 'F.jpg' + '" target="_blank"><img class="shadow-sm rounded mx-auto d-block" src="'+ urlwikimedia + 'thumb/' + feature.properties.photo + '/240px-' + feature.properties.ID_P + 'F.jpg' + '" alt="Card image cap"></a></div></div></div><!-- Collapsible Group Item # 2 --><div class="card card-collapse"><div class="card-header text-center card-header-collapse" id="headingTwo"><button class="btn btn-link btn-link-collapse collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">опис</button></div><div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionСollapse"> <div class="card-body card-body-collapse overflow-auto" style="max-height: 210px;">'
				 + feature.properties.opys +
				 '<div class="card-footer p-0 mt-2 bg-transparent border-danger" style="color: #BF360C; align-middle">Джерело: <button class="btn mb-1 p-0 btn-link"  style="font-size: 0.9rem;" type="button" data-toggle="modal" data-target="#modalInfo">[ '
				 + feature.properties.src +
				 ' ]</button></div></div></div></div></div></div>';
				 layer.bindPopup(popupContent);	}

function popPlaces(feature, layer) {
		     var popupContent = '<div class="card p-0 mb-1" style="background-color: #770f00; width: 310px;"><div class="px-1" style="font-size: 0.9rem; color: #f9e1a3;">📌 Пам’ятне місце</div><!-- Collapse accordion --><div class="accordion" id="accordionСollapse"><!-- Collapsible Group Item # 1 --><div class="card card-collapse"><div class="card-header py-2 card-header-collapse" id="headingOne"><button class="btn btn-link btn-link-collapse font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'
				 + feature.properties.name +
				 '</button></div><div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionСollapse"><div class="card-body card-body-collapse"><a title="Yurii-mr [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], з Вікісховища" href="https://commons.wikimedia.org/wiki/File:'  + feature.properties.ID_P + '.jpg' + '" target="_blank"><img class="shadow-sm rounded mx-auto d-block" src="'+ urlwikimedia + 'thumb/' +  feature.properties.photo + '/240px-' + feature.properties.ID_M + '.jpg' + '" alt="Card image cap"></a></div></div></div><!-- Collapsible Group Item # 2 --><div class="card card-collapse"><div class="card-header text-center card-header-collapse" id="headingTwo"><button class="btn btn-link btn-link-collapse collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">опис</button></div><div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionСollapse"> <div class="card-body card-body-collapse overflow-auto" style="max-height: 210px;">'
				 + feature.properties.opys +
				 '<div class="card-footer p-0 mt-2 bg-transparent border-danger" style="color: #BF360C; align-middle">Джерело: <button class="btn mb-1 p-0 btn-link"  style="font-size: 0.9rem;" type="button" data-toggle="modal" data-target="#modalInfo">[ '
				 + feature.properties.src +
				 ' ]</button></div></div></div></div></div></div>';
		     layer.bindPopup(popupContent); }

var diyachi = L.geoJson(person, {
		pointToLayer: function (feature, latlng) {
//				 var context = {feature: feature, variables: {}};
		return L.marker(latlng, styleIcons(feature));
		    }, onEachFeature: popDiachi
		});

var places = L.geoJson(place, {
		    pointToLayer: function (feature, latlng) {
//		        var context = {feature: feature, variables: {}};
		        return L.marker(latlng, styleIcons(feature));
		    }, onEachFeature: popPlaces
		});

var title = new L.Control({position: 'topleft'});
		title.onAdd = function(map) {
					this._div = L.DomUtil.create("div", "info");
					this.update(); return this._div; };
		title.update = function() {
					this._div.innerHTML = '<div class="d-inline-flex"> <nav class="navbar navbar-expand-lg navbar-light navbar-title bg-light2"> <button class="navbar-toggler toggler-title" type="button" data-toggle="collapse" data-target="#TogglerTitle" aria-controls="TogglerTitle" aria-expanded="false" aria-label="Toggle navigation"> <i class="fa fa-map-marker-alt"></i> </button> <div class="collapse navbar-collapse" id="TogglerTitle"> Місця пам’яті Української революції 1917‒1921 років на Полтавщині </div> </nav></div>';
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
