$(document).ready(() => {
    $('.hamburger-button').on('click', () => {
        $('.navigation').toggle();
    });

    $('.menu-item').on('click', () => {
        if ($(window).width() < 768) {
            $('.navigation').hide();
        }     
    })
});

$(window).scroll(() => {
    if ($(this).scrollTop() > 50 && $(window).width() < 768)
     {
        $('.navigation').hide();
     } else {
        $('.navigation').show();
     }
});

$(window).resize(() => {
    if ($(window).width() > 768 ) {
        $('.navigation').show();
    }
})
