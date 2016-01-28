'use strict';
(function ($) {
    $.fn.geoSelector = function (region_id) {
        var input = "<div class='search-form'><input type='text' class='search'/></div>";
        var cities_list = "<div class='cities'><ul class='cities_list'></ul></div>"
        this.append(input);
        this.after().append(cities_list);
        this.children('div').children('input').after('<ul class="result"></ul>');
        var RegionAPI = "http://evildevel.com/Test/Region";
        var CityAPI = "http://evildevel.com/Test/City";
        var parent = this;

        if (region_id) {
            selectRegion(region_id, parent);
            selectCities(region_id, parent)
        }
        searchRegion(parent);




        function selectRegion(id, parent) {
            var input = parent.children('div').children('input');
            $.getJSON(RegionAPI)
                .success(function (data) {
                    var region = data[id - 1];
                    input.val(region[1]);
                });
        }

        function selectCities(id, parent) {
            $.getJSON(CityAPI, {
                    region: id
                })
                .success(function (region) {
                    $.each(region, function (id, city) {
                        parent.children('.cities').children('.cities_list').append("<li>" + city[1] + "</li>");
                    });
                });
        }



        function searchRegion(parent) {
            $.getJSON(RegionAPI)
                .success(function (name) {

                    var region = name;
                    var cache = {};
                    var draw = false;
                    var input = parent.children('div').children('input');
                    var result = parent.children('.search-form').children('.result');


                    input.on("keyup", function (event) {
                        var query = input.val();
                        var term;
                        if (input.val().length > 2) {
                            if (query in cache) {
                                results = cache[query];
                            }
                            else {
                                var results = $.grep(region, function (name) {
                                    return name[1].search(RegExp(query, "i")) != -1;
                                });
                                cache[query] = results;
                            }
                            if (draw == false) {
                                //$("#search").after('<ul id="result"></ul>');
                                draw = true;
                                $(document).on("click", ".list-item", function () {
                                    var region_id = $(this).attr('region_id');
                                    var parent = $(this).parent('.result').parent('.search-form').parent('div');

                                    selectCities(region_id, parent);
                                    var input = parent.children('div').children('input');
                                    input.val($(this).text());
                                    result.empty();
                                    parent.children('.cities').children('.cities_list').empty();
                                });
                            }
                            else {
                                result.empty();
                            }
                            for (term in results) {
                                result.append("<li class='list-item' region_id=" + results[term][0] + ">" + results[term][1] + "</li>");
                            }
                        }
                        else if (draw) {
                            result.empty();
                        }
                    });


                });
        }



    };
})(jQuery);