+function ($) {
    'use strict';
    $(document).on('click','.menu-toggle', function(){
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('.menu').removeClass('open').addClass('close');
        }
        else {
            $(this).addClass('opened');
            $('.menu').removeClass('close').addClass('open');
        }

    });

    $.ajax({
        url: 'lib/js/projects.json',
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function(data){
            var output = '<ul>';
            $(data.projects).each(function(index, value){
                output += '<li><div class="project-header">' + value.header + '</div><div class="project-desc">' + value.description1 + '</div><div class="project-desc">' + value.description2 + '</div><div class="project-img"><img src="lib/img/' + value.img + '"/></div><div class="project-btn"><a href="#" class="button">Navigate to project</a><a href="#" class="button">Do not show this to me</a></div></li>';
            });
            output += '</ul>';
            $('.projects').html(output);

        }
    });
}(jQuery);

