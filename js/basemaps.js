// набір карт www.thunderforest.com
var ThunderforestUrl = 'https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey=9bf46b3f55ae48059ee52fdfeb14e0b1',
    ThunderforestAttr = '2020 <a href="http://www.velopoltava.org">ГО «ВелоПолтава»</a> | Maps © <a href="https://www.thunderforest.com">Thunderforest</a> | Data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>';

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

// OpenStreetMap
var osm = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '© OpenStreetMap contributors'}),
    osmBw = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {attribution: '© OpenStreetMap contributors'});

// набір карт різні
var
    uatopomap = L.tileLayer('https://dgm.gki.com.ua/map/rtile/carto_2012332222387848919/ua/{z}/{x}/{y}.png', {attribution: '2020 <a href="http://www.velopoltava.org">ГО «ВелоПолтава»</a> | Maps © <a href="https://gki.com.ua/">Науково-дослідний інститут геодезії і картографії</a> CC-BY-SA</a>)'}),
    opentopomap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution: '2020 <a href="http://www.velopoltava.org">ГО «ВелоПолтава»</a> | Kartendaten: © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende, SRTM | Kartendarstellung: © <a href="http://opentopomap.org/">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),
    m4UMaps = L.tileLayer('https://tileserver.4umaps.com/{z}/{x}/{y}.png', {attribution: '2020 <a href="http://www.velopoltava.org">ГО «ВелоПолтава»</a> | © 4UMaps.com <a href="https://4umaps.com/" target="_parent">4UMaps</a> Data CC-By-SA by OpenStreetMap', maxZoom: 15}),
    watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', { attribution: '2020 <a href="http://www.velopoltava.org">ГО «ВелоПолтава»</a> | Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> | Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', subdomains: 'abcd', minZoom: 1, maxZoom: 16, ext: 'png'});


// набір карт MIX
var baseMapsMix = {
//   "<span style='color: gray'>Сіра</span>": MapBoxGrayscale,
    "Мапа України": uatopomap,
    "Супутник": MapBoxSatellite,
//    "Outdoors": MapBoxOutdoors,
    "TF Pioneer": ThunderforestPioneer,
    "Акварель": watercolor,
    "Топографічна": opentopomap
    };
