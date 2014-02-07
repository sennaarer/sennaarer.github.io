"use strict";

app.controller("MainCtrl", [
    "$rootScope",
    "$scope",
    "sections",
    "$filter",
    "$location",
    "setTitle",
    "setView",
    "setLocation",
    "$routeParams",
    "$route",

    function ($rootScope, $scope, sections, $filter, $location, setTitle, setView, setLocation, $routeParams, $route) {

        $scope.sections = $filter('orderBy')(sections, 'name');

        if($routeParams.section==undefined){
            $rootScope.windowTitle = "Home";
            $rootScope.windowView = "/views/views.html";
            var section = $routeParams.section;
            console.log(section);
        }
        else {
            var section = $routeParams.section;
            console.log(section);
        }
        $scope.goTo = function (path, name) {
            setLocation.name(path);
            setTitle.name(name);
            setView.name(path);

            var section = $routeParams.section;
            console.log(section);

        }


    }]);

