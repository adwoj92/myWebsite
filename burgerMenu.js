$(document).ready(() => {
    
    $('.hamburger-button').on('click', () => {
        $('.navigation').toggle();
    });

    $('.menu-item').on('click', () => {
        if ($(window).width() < 768) {
            $('.navigation').slideUp(250);
        }     
    });

    $(window).scroll(() => {
        if ($(window).scrollTop() > 50 && $(window).width() < 768)
        {
            $('.navigation').slideUp(250);
        }
    });

    $(window).resize(() => {
        if ($(window).width() > 768 ) {
            $('.navigation').show();
        }
        if ($(window).width() < 768 ) {
            $('.navigation').hide();
        }
    });
});


