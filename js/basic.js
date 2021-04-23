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
var acc = document.getElementsByClassName("W3Sch_Acc");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("W3Sch_Acc_active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "em";
    }
  });
}
