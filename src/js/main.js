$(window).scroll(function(){
  $('#header').toggleClass('header-stick', $(this).scrollTop() > 0);
});



$('.phone').click(function() {
  $('.fa-chevron-down').toggle();
  $('.fa-chevron-up').toggle();
  $('.phone-submenu').slideToggle('fast');
});



$('.more-services').click(function() {
$('.services-list_item').css('display', 'block');
$(this).css('display', 'none');
});



// Mobile menu
$('.mobile-menu_button').click(function() {
  $('.overlay-menu').toggleClass('active-menu');
});

$('.close-menu').click(function() {
  $('.overlay-menu').toggleClass('active-menu');
});

$('.mobile-menu_link').click(function() {
  $('.overlay-menu').toggleClass('active-menu');
});
// Mobile Menu


