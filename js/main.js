$(document).ready(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('.about-master__heading').addClass('scrolled');
        }
        else {
            $('.about-master__heading').removeClass('scrolled');
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 450){
            $('.about-master__textbox').addClass('scrolled');
        }
        else {
            $('.about-master__textbox').removeClass('scrolled');
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 1000) {
            $('.gallery--tufts, .gallery__name--tufts').addClass('scrolled');
        }
        else {
            $('.gallery--tufts, .gallery__name--tufts').removeClass('scrolled');
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 1230) {
            $('.gallery--curls, .gallery__name--curls').addClass('scrolled');
        }
        else {
            $('.gallery--curls, .gallery__name--curls').removeClass('scrolled');
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 1460) {
            $('.gallery--braids, .gallery__name--braids').addClass('scrolled');
        }
        else {
            $('.gallery--braids, .gallery__name--braids').removeClass('scrolled');
        }
    });
});