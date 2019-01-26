$(document).on('click', '.tabs_nav-link', function(e){
 e.preventDefault();
 var tabId = $(this).attr('href');
 $(this).addClass('active');
 $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
 $(tabId).show(400);
 $(tabId).siblings('.tab_content').hide(400);
});

$('.testimonials_slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><span><</span></button>',
    nextArrow: '<button type="button" class="slick-next"><span>></span></button>',
    dots: true
});

$(document).on('click', '.nav_toggle', function(){
    $(this).toggleClass('active');
    $(this).next('.header_nav').slideToggle(400);
});
