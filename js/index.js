let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; 
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});
$(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    fade: true,
  });
});
$('.modal').modaal({
  overlay_opacity: 0.8
});
function change() {
  if (document.getElementById("select_box")) {
    selboxValue = document.getElementById("select_box").value;
    if (selboxValue == "1") {
      document.getElementById("txt1").style.display = "";
      document.getElementById("txt2").style.display = "none";
      document.getElementById("txt3").style.display = "none";
    } else if (selboxValue == "2") {
      document.getElementById("txt2").style.display = "";
      document.getElementById("txt1").style.display = "none";
      document.getElementById("txt3").style.display = "none";
    } else if (selboxValue == "3") {
      document.getElementById("txt3").style.display = "";
      document.getElementById("txt1").style.display = "none";
      document.getElementById("txt2").style.display = "none";
    }
  } 
}
