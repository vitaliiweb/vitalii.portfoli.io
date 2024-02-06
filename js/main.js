// menu is-show

$(document).ready(function() {
    $('.js-header-toggles').on('click', function() {
        $('body').toggleClass('is-show');

        if ($('body').hasClass('is-show')) {
            $('body').addClass('lock');
        } else {
            $('body').removeClass('lock');
        }
    });
});