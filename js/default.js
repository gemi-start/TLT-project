$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText : ["<span aria-label='Previous' aria-hidden='true'>PREV</span>","<span aria-label='Next' aria-hidden='true'>NEXT</span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
});
// nav bar //
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>500);
});
//--navbar //