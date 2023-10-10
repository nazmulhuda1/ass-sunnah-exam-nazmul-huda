jQuery(document).ready(function ($) {
    //==== Slick slider ====
    $('.client_wrapper').slick({
        autoplay: true,
        autoplaySpeed: 1200,
        infinite: true,
        // fade: true,
        dots: true,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
    });
})

