"use strict";

var app = angular.module('sennaarer.github.io', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'MainCtrl',
                template: 'index.html'
            }).
            when('/:section', {
                controller: 'SectionCtrl',
                template: 'views/setion.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

