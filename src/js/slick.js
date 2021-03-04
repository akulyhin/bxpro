$(document).ready(function(){
  $('.reviews_slider').slick({
  // centerMode: true,
  slidesToShow: 1,
  dots: true,
  cssEase: 'ease',
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: "<div class='cases-prev cases-arrow'><div class='cases-prev-inner cases-arrow-inner'><i class='fas fa-chevron-left cases-icon'></i></div></div>",
  nextArrow: "<div class='cases-next cases-arrow'><div class='cases-next-inner cases-arrow-inner'><i class='fas fa-chevron-right cases-icon'></i></div></div>",
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        centerMode: true,
        infinite: false,
        autoplay: false,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        infinite: false,
        autoplay: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        autoplay: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });

});
