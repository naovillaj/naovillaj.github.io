
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

  $('.nav-click').on('click', function(e){
	e.preventDefault();
	$('.side-nav').hide();	
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -70}, 800, 'linear');
    $('#sidenav-overlay').css('background-color', 'transparent');
  });
  $('.button-collapse').on('click', function(){
  	$('.side-nav').show();
  })

  new WOW().init();

});
