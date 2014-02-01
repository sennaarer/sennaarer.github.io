"use strict";

var app = angular.module("sennaarer.github.io", ["ngRoute"]);


app.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when("/", {
            controller: "topCtrl"
        }).
        when("/:part", {
            templateUrl:"views/part.html",
            controller: "leftCtrl"

        }).
        when("/:part/:article", {
            controller: "leftCtrl"

        }).
        otherwise({redirectTo: '/'});
}]);
