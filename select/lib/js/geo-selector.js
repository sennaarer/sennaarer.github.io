'use strict';
(function ($) {
    $.fn.geoSelector = function (region_id) {
        var input = "<div id='search-form'><input type='text' id='search' /></div>";
        var cities_list = "<div id='cities'><ul id='cities_list'></ul></div>"
        this.append(input);
        this.after().append(cities_list);
        $("#search").after('<ul id="result"></ul>');
        var RegionAPI = "http://evildevel.com/Test/Region";
        var CityAPI = "http://evildevel.com/Test/City";
        if (region_id) {
            selectRegion(region_id);
            selectCities(region_id)

        }
        $.getJSON(RegionAPI, searchRegion);
        function searchRegion(name) {
            var region = name;
            var cache = {};
            var draw = false;
            $("#search").on("keyup", function (event) {
                var query = $("#search").val();
                var term;
                if ($("#search").val().length > 2) {
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
                            selectCities(region_id);
                            $("#search").val($(this).text());
                            $("#result").empty();
                            $("#cities_list").empty();
                        });
                    }
                    else {
                        $("#result").empty();
                    }
                    for (term in results) {
                        $("#result").append("<li class='list-item' region_id=" + results[term][0] + ">" + results[term][1] + "</li>");
                    }
                }
                else if (draw) {
                    $("#result").empty();
                }
            });
        }
        function selectRegion(id) {
            $.getJSON(RegionAPI)
                .success(function (data) {
                    var region = data[id];
                    $("#search").val(region[1]);
                });
        }
        function selectCities(id) {
            $.getJSON(CityAPI, {
                    region: id
                })
                .success(function (region) {
                    $.each(region, function (id, city) {

                        $("#cities_list").append("<li>" + city[1] + "</li>");
                    });
                });
        }
    };
})(jQuery);