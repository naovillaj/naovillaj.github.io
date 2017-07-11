
$(document).ready(function(){
  $(".button-collapse").sideNav();  
  // $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);

});
