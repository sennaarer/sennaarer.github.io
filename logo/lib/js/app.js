+function ($) {
    'use strict';
    $(document).on('click', '#toggler', function () {
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
    $(document).on('click','#toggling', function(){
        $('#toggler').removeClass('opened');
        $('#toggling').addClass('hidden').empty();
    });
    $(document).on('click','#gallery_more',function(){
        if ($(this).hasClass('less')){
            $(this).removeClass('less');
            $('.design-gallery-right').removeClass('hidden-xs');
            $(this).text('LESS');
        }
        else {
            $(this).addClass('less')
            $('.design-gallery-right').addClass('hidden-xs');
            $(this).text('MORE');

        }

    });
}(jQuery);

