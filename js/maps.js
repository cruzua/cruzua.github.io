var urlwiki = "https://uk.wikipedia.org/wiki/",
    urlwikimedia = "https://upload.wikimedia.org/wikipedia/commons/",
    title_map = [
          'Шляхами союзної армії Шведського короля Карла ХІІ та Гетьмана України Івана Мазепи: від Гадяча до Переволочної<br><span class="badge badge-danger">Сайт працює в тестовому режимі</span>',
          'Місця пам’яті Української революції 1917‒1921 років на Полтавщині. Інтерактивна карта',
          'Вікові та меморіальні дерева Полтавщини',
          'Активний туризм і відпочинок на Полтавщині'
          ];

function styleDivIcons(feature) { // вибір іконок svg з style.js
 	return {icon: L.divIcon({
		   		 iconSize: [32, 32], // also can be set through CSS
					 html: svg_icon(feature)})
	}
};

function obxvat(feature) { // Побудова таблиці з результатми обміру дубів
  if (feature.properties.poi_dt_old !== null) {
    var obxvat_tr = '',
        obxvat_arr = feature.properties.poi_dt_old.split(',');
            for (var i=0; i < obxvat_arr.length; i++) {
                var obxvat_el = obxvat_arr[i].split('/');
                obxvat_tr += ('<tr><td>' + obxvat_el[0] + '</td><td>' + obxvat_el[1] + '</td></tr>' );}
    var table_obxvat = '<p><i>Обмір окружності стовбура дерева проводився на висоті 130 см від рівня землі.</i></p><table class="table table-sm"><thead><tr><th scope="col">Обхват (см)</th><th scope="col">Дата</th></tr></thead><tbody>' + 	obxvat_tr + '</tbody></table>';
    return table_obxvat
  } else {return ''}
}

function wiki_photo_fn(feature, first) {
    // додаткові фото з wikimedia

    if (feature.properties.wiki_photo !== null) {
      var wi_ph_ar = feature.properties.wiki_photo.split(","),
        wi_ph_gl = create_el("div", "wiki_photo");
      if (wi_ph_ar.length > 1) {
      if (first !== undefined) {
        var gl_a = create_a(urlwikimedia + wi_ph_ar[0].trim(), null, "Yurii-mr, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, через Вікісховище");
        var gl_ph = create_img(urlwikimedia + "thumb/" + wi_ph_ar[0].trim() + "/256px-" + wi_ph_ar[0].trim().slice(5), "128", "auto", feature.properties.poi_id);
        gl_a.appendChild(gl_ph);
        wi_ph_gl.appendChild(gl_a);
      } else {
        for (var i = 1; i < wi_ph_ar.length; i++) {
          var gl_a = create_a(urlwikimedia + wi_ph_ar[i].trim(), null, "Yurii-mr, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, через Вікісховище");
          var gl_ph = create_img(urlwikimedia + "thumb/" + wi_ph_ar[i].trim() + "/256px-" + wi_ph_ar[i].trim().slice(5), "auto", "auto", feature.properties.poi_id);
          gl_a.appendChild(gl_ph);
          wi_ph_gl.appendChild(gl_a);
          if (wi_ph_ar.length !==2 && i !== wi_ph_ar.length - 1) wi_ph_gl.appendChild(document.createElement("hr"));
          //alert (wi_ph_gl.childNodes);
        } }
      } return wi_ph_gl; } else { return ""; }
}

function poiPopUp(str) {
//alert(str);
  if (str == "") {
    document.getElementById("tab-c").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("tab-c").innerHTML = this.responseText;
  }
  xhttp.open("GET", "mysqlpoi.php?q="+str);
  xhttp.send();
}

function popUp(feature, layer) {
var div_poi_popup = create_el("div", "w3-theme-d2", "poi-popup");
    div_poi_popup.innerHTML = '<h6>' + svg_icon(feature) + feature.properties.poi_name + '</h6>';

var div_tab_links = create_el("div", "tabs-links", null, div_poi_popup),
    div_tab_content = create_el("div", "tabs-content", null, div_poi_popup);

// побудова tablinks & tabcontent A
var btn_tab_a = create_el("button", "tablinks w3-theme-d2", null, div_tab_links);
    btn_tab_a.setAttribute("onclick", "openTab('tab-a')");
    btn_tab_a.innerHTML = "фото";
var div_tab_a = create_el("div", "tabcontent", "tab-a", div_tab_content);
if (feature.properties.wiki_photo == null) {
    div_tab_a.innerHTML = '<img role="img" alt="NOPHOTO" src="https://cruzua.github.io/svg/NOPHOTO.svg">';}
  else {
    div_tab_a.innerHTML = wiki_photo_fn(feature, 0).innerHTML;
  }

// побудова tablinks & tabcontent B
if (feature.properties.poi_opys !== null) {
  var btn_tab_b = create_el("button", "tablinks", "tabactive", div_tab_links);
    btn_tab_b.setAttribute("onclick", "openTab('tab-b')");
    btn_tab_b.innerHTML = "опис";
var div_tab_b = create_el("div", "tabcontent", "tab-b", div_tab_content);
  if (feature.properties.poi_opys !== null) div_tab_b.innerHTML = feature.properties.poi_opys;
  //div_tab_b.innerHTML = wiki_photo_fn(feature);
  div_tab_b.setAttribute("style", "display: none;");}

//побудова tablinks & tabcontent C
if (feature.properties.cmt !== null) {
  var btn_tab_с = create_el("button", "tablinks", null, div_tab_links);
    btn_tab_с.setAttribute("onclick", "openTab('tab-c')");
    btn_tab_с.innerHTML = "cmt";
  var div_tab_c = create_el("div", "tabcontent", "tab-c", div_tab_content);
    div_tab_c.innerHTML = feature.properties.cmt;
    div_tab_c.setAttribute("style", "display: none;");}

// побудова tablinks & tabcontent D
if (feature.properties.wiki_photo !== null) {
  if (feature.properties.wiki_photo.split(',').length > 1) {
    var btn_tab_d = create_el("button", "tablinks", null, div_tab_links);
      btn_tab_d.setAttribute("onclick", "openTab('tab-d')");
      btn_tab_d.innerHTML = "фото +";
    var div_tab_d = create_el("div", "tabcontent", "tab-d", div_tab_content);
      div_tab_d.innerHTML = wiki_photo_fn(feature).outerHTML;
      div_tab_d.setAttribute("style", "display: none;");} }

  layer.bindPopup(div_poi_popup);
}
