
$(document).ready(function(){
  $(".button-collapse").sideNav();  
  // $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000);


  $('.move-scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -70}, 800, 'linear');
  });

});
