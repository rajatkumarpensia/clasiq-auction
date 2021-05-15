$(document).ready(function(){
    $('.toggle-menu').click(function(){
        $(this).toggleClass('open');
        $('.menu').toggleClass('show');
        $("body").toggleClass("overflow-hide");
    })
    $('.close-menu').click(function(){
        $('.toggle-menu').toggleClass('open');
        $('.menu').toggleClass('show');
        $("body").toggleClass("overflow-hide");
    })
    $('.level-1').click(function(){
        $(this).toggleClass('open');
    })
    $('.open-popup-modal').click(function(){
        var popupID = $(this).data("target")
        var popupID = '#'+ popupID;
        $('.popup-modal').removeClass('show');
        $("body").removeClass("overflow-hide");
        $(popupID).addClass('show');
        $("body").toggleClass("overflow-hide");
    })
    $('.close-popup').click(function(){
        $(this).parents('.popup-modal').removeClass('show');
        $("body").toggleClass("overflow-hide");
    })
    $('.review-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
      });
      $('.que-ans-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
         
          }
          
        ]
      });
      $(".gallery .view-all-gallery").click(function(){
          $(this).addClass('d-none');
          $(".gallery-img-wrap").removeClass('d-none');
      })
      $(".gallery .hide-all-gallery").click(function(){
        $(".gallery .view-all-gallery").removeClass('d-none');
        $(".gallery-img-wrap").addClass('d-none');
    })
    
});



$(window).scroll(function() {
    var scrollTop = $(window).scrollTop(),
        divOffset = $('.auction-car-bid-details').offset().top,
        dist = (divOffset - scrollTop);
    if (dist < 95) {
        $('.auction-car-bid-details').addClass("fixed-now");
    }
    else{ 
        $('.auction-car-bid-details').removeClass("fixed-now");
    }
})
