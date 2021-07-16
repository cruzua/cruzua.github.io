function create_el(el_tag, el_class, el_id, app_child) {
  var el;
  if (el_tag !== undefined) el = document.createElement(el_tag);
  if (el_id !== undefined && el_id !== null ) el.setAttribute("id", el_id);
  if (el_class !== undefined && el_class !== null) el.setAttribute("class", el_class);
  if (app_child) {app_child.appendChild(el);}
  return el;
}

function create_img(img_src, img_width, img_height, img_alt) {
  var el_img = document.createElement("img");
      el_img.setAttribute("src", img_src);
      if (img_width !== undefined && img_width !== null ) el_img.setAttribute("width", img_width);
      if (img_height !== undefined && img_height !== null ) el_img.setAttribute("height", img_height);
      if (img_alt !== undefined && img_alt !== null ) el_img.setAttribute("alt", img_alt);
      //document.body.appendChild(el_img);
  return el_img;
}

function create_a(a_href, a_html, a_title) {
  var el_a = document.createElement("a");
      el_a.setAttribute("href", a_href);
      if (a_title !== undefined && a_title !== null ) el_a.setAttribute("title", a_title);
      el_a.setAttribute("target", "_blank");
      if (a_html !== undefined && a_html !== null ) el_a.innerHTML = a_html;
      //document.body.appendChild(el_a);
  return el_a;
}

function addClassName(getClass, addClass) {
  var arr = document.getElementsByClassName(getClass);
  for (var i = 0; i < arr.length; i++) {
    arr[i].className = arr[i].className += addClass;
  }
}

function fn_toggle(tgl_btn, tgl_el, tgl_el_class, tgl_btn_active) {
  var btnToggle = document.getElementById(tgl_btn);
  var elToggle = document.getElementById(tgl_el);
  btnToggle.addEventListener("click", function () {
    btnToggle.classList.toggle(tgl_btn_active);
    elToggle.classList.toggle(tgl_el_class);
  });
}

function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-theme-d2", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " w3-theme-d2";
}

// Shrink Navbar on Scroll
window.onscroll = function () {  scrollFunction(); };

function scrollFunction() {
var i, header_class;
  if ( document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ) {
    header_class = document.getElementsByClassName("header-bg-none");
  for (i = 0; i < header_class.length; i++) {
    header_class[i].className = header_class[i].className.replace( "header-bg-none", "header-bg" );
  }
    document.getElementById("navbar-hide").style.display = "none";
    document.getElementById("navbar-hide").style.transition = "0.3s";
    document.getElementById("Logo_MP").style.height = "3em";
    document.getElementById("Logo_MP").style.transition = "0.3s";
  } else {
    header_class = document.getElementsByClassName("header-bg");
  for (i = 0; i < header_class.length; i++) {
    header_class[i].className = header_class[i].className.replace( "header-bg", "header-bg-none" );
  }
    document.getElementById("navbar-hide").style.display = "inherit";
    document.getElementById("navbar-hide").style.transition = "0.3s";
    document.getElementById("Logo_MP").style.height = "4em";
    document.getElementById("Logo_MP").style.transition = "0.3s";
  }
}
// W3Schools Accordion
var acc = document.getElementsByClassName("W3Sch_Acc_btn");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("W3Sch_Acc_btn_active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "em";
    }
  });
}
