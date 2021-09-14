var urlwiki = "https://uk.wikipedia.org/wiki/",
    urlwikimedia = "https://upload.wikimedia.org/wikipedia/commons/",
    title_map = [
          'Шляхами союзної армії Шведського короля Карла ХІІ та Гетьмана України Івана Мазепи: від Гадяча до Переволочної<br><span class="badge badge-danger">Сайт працює в тестовому режимі</span>',
          'Місця пам’яті Української революції 1917‒1921 років на Полтавщині. Інтерактивна карта',
          'Вікові та меморіальні дерева Полтавщини',
          'Активний туризм і відпочинок на Полтавщині'
          ];

function poi_sql_PopUp(feature, layer) {
  var div_poi_popup = create_el("div", "w3-theme-d2", "poi-popup");
  div_poi_popup.innerHTML = '<h6>' + svg_icon(feature) + ' ' + feature.properties.poi_name + '</h6>';
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {div_poi_popup.innerHTML += this.responseText;}
  xhttp.open("GET", "mysqlpoi.php?q=" + feature.properties.poi_id);
  xhttp.send();
  layer.bindPopup(div_poi_popup);
}
