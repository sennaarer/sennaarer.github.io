"use strict";

app.controller("topCtrl", ["$scope","base", "$location", function($scope, base, $location){
    $scope.parts = base;

    $scope.goto = function(path){
        $location.path(path);

    };
}]);

app.controller("leftCtrl", ["$scope", "base", "$routeParams", "$filter", "$location",
    function($scope, base, $routeParams, $filter, $location) {
        var subpart = $filter('filter')(base, $routeParams.part);
        $scope.bparts = subpart[0].subparts;
        $scope.color = subpart[0].color;
        $scope.filter = $routeParams.part;



        $scope.open = function(path){
            $location.path(path);
        };

    }]);

