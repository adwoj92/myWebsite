$(document).ready(() => {
    $('.hamburger-button').on('click', () => {
        $('.navigation').toggle();
    });

    $('.menu-item').on('click', () => {
        if ($(window).width() < 768) {
            $('.navigation').hide();
        }     
    })

    if ($(windows).width() > 768) {
        $('.navigation').show();
    }
});