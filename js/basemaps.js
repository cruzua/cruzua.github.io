var vpAttr = '2021 <a href="http://www.velopoltava.org">ГО «ВелоПолтава»</a>';

// набір карт www.thunderforest.com
var ThunderforestUrl = 'https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey=9bf46b3f55ae48059ee52fdfeb14e0b1',
    ThunderforestAttr = vpAttr + ' | Maps © <a href="https://www.thunderforest.com">Thunderforest</a> | Data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>';

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
    VisicomAttr = vpAttr + ' | Картографічні дані © 2021 «<a href="https://api.visicom.ua/">АТ Візіком</a>»';

var VisicomBaseUA = L.tileLayer(VisicomUrl, {map: 'world,ua', style: 'base', attribution: VisicomAttr, subdomains: "123", maxZoom: 19, tms: true}),
    VisicomUAwb = L.tileLayer(VisicomUrl, {map: 'world,ua', style: 'print', attribution: VisicomAttr, subdomains: "123", maxZoom: 19, tms: true}),
    VisicomUAbg = L.tileLayer(VisicomUrl, {map: 'world,ua', style: 'base_background', attribution: VisicomAttr, subdomains: "123", maxZoom: 19, tms: true}), // без підписів
    VisicomUAsing = L.tileLayer(VisicomUrl, {map: 'world,ua', style: 'base_sign', attribution: VisicomAttr, subdomains: "123", maxZoom: 19, tms: true}); // підписи


// OpenStreetMap
var osm = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: vpAttr + ' | Map data © OpenStreetMap contributors'}),
    osmGPS = L.tileLayer('https://{s}.gps-tile.openstreetmap.org/lines/{z}/{x}/{y}.png', {attribution: '<a href="https://www.openstreetmap.org/#&layers=G">' + 'OpenStreetMap public GPS traces</a>'}),
    osmBw = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {attribution: vpAttr + ' | Map data © OpenStreetMap contributors'});

// набір карт з горизонталями
var uatopomap = L.tileLayer('https://dgm.gki.com.ua/map/rtile/carto_2012332222387848919/ua/{z}/{x}/{y}.png', {attribution: vpAttr + ' | Maps © <a href="https://gki.com.ua/">Науково-дослідний інститут геодезії і картографії</a> CC-BY-SA</a>)'}),
    opentopomap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution: vpAttr + ' | Kartendaten: © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende, SRTM | Kartendarstellung: © <a href="http://opentopomap.org/">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),
    m4UMaps = L.tileLayer('https://tileserver.4umaps.com/{z}/{x}/{y}.png', {attribution: vpAttr + ' | © 4UMaps.com <a href="https://4umaps.com/" target="_parent">4UMaps</a> Data CC-By-SA by OpenStreetMap', maxZoom: 15});

// набір карт різні
var hikebike = L.tileLayer('http://toolserver.org/tiles/hikebike/{z}/{x}/{y}.png', {attribution: vpAttr + ' | Maps © <a href="">Hike Bike</a> CC-BY-SA</a>)'}),
    watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', { attribution: vpAttr + ' | Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> | Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', subdomains: 'abcd', minZoom: 1, maxZoom: 16, ext: 'png'}),
    mapy_cz_tour = L.tileLayer('https://m{s}.mapserver.mapy.cz/turist-m/{z}-{x}-{y}', {attribution: '<a href="https://mapy.cz/turisticka">mapy.cz outdoor map</a>'}),
    stravaHot = L.tileLayer('https://heatmap-external-a.strava.com/tiles-auth/all/hot/{z}/{x}/{y}.png?px=256', {attribution: '<a href="https://www.strava.com/heatmap">Strava Global Heatmap</a>'});

var MapBoxSatellite = L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmVsb3BvbHRhdmEiLCJhIjoiY2tmeG1pcGh6MXM0ejJ6c3ZheG4yM3R2aCJ9.cO3Um57gnX9eGqA9kLT7Ug', {ver: '4', id: 'mapbox.satellite', attribution: vpAttr + ' | Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'});


// набір карт MIX
var baseMapsMix = {
//   "<span style='color: gray'>Сіра</span>": MapBoxGrayscale,
    "Мапа України": uatopomap,
    "VisicomBaseUA": VisicomBaseUA,
    "VisicomUAwb": VisicomUAwb,
    "Супутник": MapBoxSatellite,
//    "Outdoors": MapBoxOutdoors,
    "TF Pioneer": ThunderforestPioneer,
    "Акварель": watercolor,
    "hikebike": hikebike,
    "Топографічна": opentopomap,
    "mapy.cz outdoor map": mapy_cz_tour
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
        { label: "Топо карта", layer: uatopomap, name: 'OpenStreeMap <b>B&W</b>' },
        { label: "Візіком", layer: VisicomBaseUA, name: 'OpenStreeMap <b>B&W</b>' },
        { label: "Візіком (сіра)", layer: VisicomUAwb }
      ]
    },
    // набір "OSM"
    {
      label: "<b>OSM</b>",
      children: [
        { label: "OpenStreeMap", layer: osm },
        { label: "OSM сіра", layer: osmBw },
        { label: "hike+bike", layer: hikebike }
      ]
    },
    // набір "З горизонталями"
    {
      label: "<b>З горизонталями</b>",
      children: [
        { label: "Топографічна", layer: opentopomap },
        { label: "4UMaps.com", layer: m4UMaps },
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
