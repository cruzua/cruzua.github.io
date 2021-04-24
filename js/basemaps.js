var vpAttr1 = '<nav class="navbar navbar-expand-lg d-inline-flex p-0"><div class="d-inline-flex"><a class="navbar-toggler p-0" style = "font-size: 0.75rem; line-height: 1;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarAttr" aria-controls="navbarTitle_page" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-arrows-alt-h"></i></a><div class="collapse navbar-collapse" id="navbarAttr"><span class="ps-1">2021 <a href="http://www.velopoltava.org">ГО «ВелоПолтава»</a>',
    vpAttr2 = '</span></div></div></nav>';

// набір карт www.thunderforest.com
var ThunderforestUrl = 'https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey=9bf46b3f55ae48059ee52fdfeb14e0b1',
    ThunderforestAttr = vpAttr1 + ' | Maps © <a href="https://www.thunderforest.com">Thunderforest</a> | Data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>' + vpAttr2;

var ThunderforestOpenCycleMap = L.tileLayer(ThunderforestUrl, {id: 'Cycle', attribution: ThunderforestAttr}),
    ThunderforestTransport = L.tileLayer(ThunderforestUrl, {id: 'transport', attribution: ThunderforestAttr}),
    ThunderforestLandscape = L.tileLayer(ThunderforestUrl, {id: 'landscape', attribution: ThunderforestAttr}),
    ThunderforestOutdoors = L.tileLayer(ThunderforestUrl, {id: 'Outdoors', attribution: ThunderforestAttr}),
    ThunderforestPioneer = L.tileLayer(ThunderforestUrl, {id: 'pioneer', attribution: ThunderforestAttr}),
    ThunderforestNeighbourhood = L.tileLayer(ThunderforestUrl, {id: 'neighbourhood', attribution: ThunderforestAttr});

var baseMapsTF = {
    "TF OpenCycleMap": ThunderforestOpenCycleMap,
    "TF Transport": ThunderforestTransport,
    "TF Landscape": ThunderforestLandscape,
    "TF Outdoors": ThunderforestOutdoors,
    "TF Pioneer": ThunderforestPioneer,
    "TF Neighbourhood": ThunderforestNeighbourhood
    };

// набір карт www.visicom.ua
var VisicomUrl = 'https://tms{s}.visicom.ua/2.0.0/{map}/{style}/{z}/{x}/{y}.png',
    VisicomAttr = vpAttr1 + ' | Картографічні дані © 2021 «<a href="https://api.visicom.ua/">АТ Візіком</a>»' + vpAttr2;

var VisicomBaseUA = L.tileLayer(VisicomUrl, {map: 'world,ua', style: 'base', attribution: VisicomAttr, subdomains: "123", maxZoom: 19, tms: true}),
    VisicomUAwb = L.tileLayer(VisicomUrl, {map: 'world,ua', style: 'print', attribution: VisicomAttr, subdomains: "123", maxZoom: 19, tms: true}),
    VisicomUAbg = L.tileLayer(VisicomUrl, {map: 'world,ua', style: 'base_background', attribution: VisicomAttr, subdomains: "123", maxZoom: 19, tms: true}), // без підписів
    VisicomUAsing = L.tileLayer(VisicomUrl, {map: 'world,ua', style: 'base_sign', attribution: VisicomAttr, subdomains: "123", maxZoom: 19, tms: true}); // підписи


// OpenStreetMap
var osm = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: vpAttr1 + ' | Map data © OpenStreetMap contributors' + vpAttr2}),
    carto = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {attribution: vpAttr1 + ' | Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>' + vpAttr2}),
    osmBw = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {attribution: vpAttr1 + ' | Map data © OpenStreetMap contributors' + vpAttr2}),
    osmGPS = L.tileLayer('https://{s}.gps-tile.openstreetmap.org/lines/{z}/{x}/{y}.png', {attribution: '<a href="https://www.openstreetmap.org/#&layers=G">' + 'OpenStreetMap public GPS traces</a>'});

// набір карт з горизонталями
var uatopomap = L.tileLayer('https://dgm.gki.com.ua/map/rtile/carto_2012332222387848919/ua/{z}/{x}/{y}.png', {attribution: vpAttr1 + ' | Maps © <a href="https://gki.com.ua/">Науково-дослідний інститут геодезії і картографії</a> CC-BY-SA</a>)' + vpAttr2}),
    opentopomap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution: vpAttr1 + ' | Kartendaten: © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende, SRTM | Kartendarstellung: © <a href="http://opentopomap.org/">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)' + vpAttr2}),
    m4UMaps = L.tileLayer('https://tileserver.4umaps.com/{z}/{x}/{y}.png', {attribution: vpAttr1 + ' | © 4UMaps.com <a href="https://4umaps.com/" target="_parent">4UMaps</a> Data CC-By-SA by OpenStreetMap' + vpAttr2, maxZoom: 15});

// набір карт різні
var hikebike = L.tileLayer('http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png', {attribution: vpAttr1 + ' | Maps © <a href="">Hike Bike</a> CC-BY-SA</a>)' + vpAttr2}),
    watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', { attribution: vpAttr1 + ' | Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> | Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' + vpAttr2, subdomains: 'abcd', minZoom: 1, maxZoom: 16, ext: 'png'}),
    mapy_cz_tour = L.tileLayer('https://m{s}.mapserver.mapy.cz/turist-m/{z}-{x}-{y}', {attribution: '<a href="https://mapy.cz/turisticka">mapy.cz outdoor map</a>'}),
    stravaHot = L.tileLayer('https://heatmap-external-a.strava.com/tiles-auth/all/hot/{z}/{x}/{y}.png?px=256', {attribution: '<a href="https://www.strava.com/heatmap">Strava Global Heatmap</a>'});

var MapBoxSatellite = L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmVsb3BvbHRhdmEiLCJhIjoiY2tmeG1pcGh6MXM0ejJ6c3ZheG4yM3R2aCJ9.cO3Um57gnX9eGqA9kLT7Ug', {ver: '4', id: 'mapbox.satellite', attribution: vpAttr1 + ' | Imagery © <a href="https://www.mapbox.com/">Mapbox</a>' + vpAttr2});


// набір карт MIX
var baseMapsMix = {
//   "<span style='color: gray'>Сіра</span>": MapBoxGrayscale,
// набір "Україна"
    "Мапа України": uatopomap,
    "Візіком": VisicomBaseUA,
    "Візіком (сіра)": VisicomUAwb,
  // набір "OSM"
    "OpenStreeMap": osm,
    "OSM сіра": osmBw,
    "OSM CARTO": carto,
    "hike+bike": hikebike,
// набір "З горизонталями"
    "Топографічна": opentopomap,
    "4UMaps.com": m4UMaps,
    "OpenCycleMap": ThunderforestOpenCycleMap,
    "Мапа України": uatopomap,
// набір "Спеціальні"
    "TF Transport": ThunderforestTransport,
    "TF Pioneer": ThunderforestPioneer,
    "Акварель": watercolor,
    "Україна (без підписів)": VisicomUAbg,
    "mapy.cz outdoor map": mapy_cz_tour,
// набір "Супутникові"
    "Супутник": MapBoxSatellite,
    };

// набір карт MIX
var baseMaps_1709 = {
    "Мапа України": uatopomap,
    "Візіком (сіра)": VisicomUAwb,
    "TF Pioneer": ThunderforestPioneer,
    "Акварель": watercolor,
    "Топографічна": opentopomap,
    "Супутник": MapBoxSatellite
    };


// Leaflet Control Layers Tree
var baseTree = {
  label: "<b>БАЗОВА МАПА</b>",
  noShow: false,
  children: [
    // набір "Україна"
    {
      label: "<b>Україна</b>",
      children: [
        { label: "Топо карта", layer: uatopomap },
        { label: "Візіком", layer: VisicomBaseUA },
        { label: "Візіком (сіра)", layer: VisicomUAwb }
      ]
    },
    // набір "OSM"
    {
      label: "<b>OSM</b>",
      children: [
        { label: "OpenStreeMap", layer: osm },
        { label: "OSM сіра", layer: osmBw },
        { label: "OSM CARTO", layer: carto },
        { label: "hike+bike", layer: hikebike }
      ]
    },
    // набір "З горизонталями"
    {
      label: "<b>З горизонталями</b>",
      children: [
        { label: "Топографічна", layer: opentopomap },
        { label: "4UMaps.com", layer: m4UMaps },
        { label: "OpenCycleMap", layer: ThunderforestOpenCycleMap },
        { label: "Мапа України", layer: uatopomap }
      ]
    },
    // набір "Спеціальні"
    {
      label: "<b>Спеціальні</b>",
      children: [
        { label: "TF Transport", layer: ThunderforestTransport },
        { label: "TF Pioneer", layer: ThunderforestPioneer },
        { label: "Акварель", layer: watercolor },
        { label: "Україна (без підписів)", layer: VisicomUAbg }
      ]
    },
    // набір "Супутникові"
    {
      label: "<b>Супутникові</b>",
      children: [{ label: "Супутник", layer: MapBoxSatellite }]
    }
  ]
};





// набір карт www.mapbox.com
var MapBoxAttr = '2020 <a href="http://www.velopoltava.org">ГО «ВелоПолтава»</a> | Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                 '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a> | ' +
                 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    MapBoxUrl = 'https://api.tiles.mapbox.com/v{ver}/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmVsb3BvbHRhdmEiLCJhIjoiY2tmeG1pcGh6MXM0ejJ6c3ZheG4yM3R2aCJ9.cO3Um57gnX9eGqA9kLT7Ug';

var MapBoxGrayscale = L.tileLayer(MapBoxUrl, {ver: '4', id: 'mapbox.light', attribution: MapBoxAttr}),
    MapBoxSatellite = L.tileLayer(MapBoxUrl, {ver: '4', id: 'mapbox.satellite', attribution: MapBoxAttr}),
    MapBoxOutdoors = L.tileLayer(MapBoxUrl, {ver: '4', id: 'mapbox.outdoors', attribution: MapBoxAttr}),
    MapBoxStreets = L.tileLayer(MapBoxUrl, {ver: '4', id: 'mapbox.streets', attribution: MapBoxAttr});

var baseMapsMapBox = {
    "Streets": MapBoxStreets,
    "<span style='color: gray'>Сіра</span>": MapBoxGrayscale,
    "Супутник": MapBoxSatellite,
    "Outdoors": MapBoxOutdoors
    };
