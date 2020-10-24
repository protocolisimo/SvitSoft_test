function headerMenuSwitcher () {
    const headerBurger = document.querySelector('.header-burger');
    const header = document.querySelector('header');


    headerBurger.addEventListener('click', () => header.classList.toggle('expandet-menu'))
}
function sliderInit () {
    
    // i prefer pure js but slick slider needs jQuery
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 700,
        dots: true,
        infinite: false,
        arrows: true,
        appendArrows: $('.arrows'),
        prevArrow: '<button id="prev" class="arrows__prev"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17L16 9M16 9L8 1M16 9L1.39876e-06 9" stroke="white"/></svg></button>',
        nextArrow: '<button id="next" class="arrows__next"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17L16 9M16 9L8 1M16 9L1.39876e-06 9" stroke="white"/></svg></button>',
        customPaging: function(slick,index) {
            return '<a>' + (index + 1) + '</a>';
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    headerMenuSwitcher();
    sliderInit ();
});