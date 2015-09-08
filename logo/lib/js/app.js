+function ($) {
    'use strict';
    $(document).on('click', '.icon-three-bars', function () {
        var menu = $('.menu').html();
        var phone = $('.phone').html();
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('#toggling').addClass('hidden').empty();
            console.log('closed');
        }
        else {
            $(this).addClass('opened');
            $('#toggling').removeClass('hidden').append(menu).append(phone);
            console.log('opened')
        }

    });
}(jQuery);

