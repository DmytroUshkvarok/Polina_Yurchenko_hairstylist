$(document).ready(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop() > 60) {
            $('.about-master__heading-box').addClass('scrolled');
        }
        else {
            $('.about-master__heading-box').removeClass('scrolled');
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 400){
            $('.about-master__textbox').addClass('scrolled');
        }
        else {
            $('.about-master__textbox').removeClass('scrolled');
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 60){
            $('.navigation').addClass('scrolled');
        }
        else {
            $('.navigation').removeClass('scrolled');
        }
    });
});
