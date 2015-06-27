var check = 0;

$(document).ready(function () {
    $('nav').click(function() {
        $(this).toggleClass('close');
        $('nav div a').toggleClass('hover');
        $(this).animate({
        }, 500, function () {
            if (check === 0) {
                check = 1;
                $(this).css({
                    transform: 'rotate(0deg)'
                });
            } else {
                check = 0;
                $(this).css({
                    transform: 'skewX(15deg) translate(45px)'
                });
            }
        });
    });
});