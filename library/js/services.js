"use strict";

app.factory('setLocation', function($location) {
    return {
        name: function(location) {
            if(location){
                var loc = 'notes/'+location;
                $location.path(loc);
            }
            else {
                var home = '/';
                $location.path(home);
            }

        }
    };
});
app.factory('setTitle', function($rootScope) {
    return {
        name: function(title) {
            if(title){
                $rootScope.windowTitle = title;
            }
            else {
                $rootScope.windowTitle = 'Home';
            }

        }
    };
});
app.factory('setView', function($rootScope) {
    return {
        name: function(view) {
                if(view){
                    $rootScope.windowView = 'views/'+view+'/index.html';
                }
                else {
                    $rootScope.windowView = 'views/views.html';
                }

        }
    };
});

app.service("sections", function () {
    var sections = {};
    sections = [
        {
            id: "haml",
            name: "HAML",
            description: "HTML Abstraction Markup Language",
            class: "forth",
            color: "success"
        },
        {
            id: "less",
            name: "LESS",
            description: "Less is a CSS pre-processor",
            class: "fifth",
            color: "primary"
        },
        {
            id: "sass",
            name: "SASS",
            description: "Syntactically Awesome StyleSheets",
            class: "third",
            color: "info"
        },
        {
            id: "angular",
            name: "AngularJS",
            description: "AngularJS is an open-source JavaScript framework",
            class: "second",
            color: "danger"
        }
    ];
    return sections;
});

app.service("base", function () {
    var base = {};
    base = [
        {
            title: "HAML",
            path: "haml",
            class: "forth",
            color: "success",
            info: "Here will be Information about HAML",
            subparts: [
                {
                    title: "Haml 1",
                    path: "haml1"
                },
                {
                    title: "Haml 2",
                    path: "haml2"
                },
                {
                    title: "Haml 3",
                    path: "haml3"
                }
            ]
        },
        {
            title: "SASS",
            path: "sass",
            class: "third",
            color: "info",
            info: "Here will be Information about SASS",
            subparts: [
                {
                    title: "Sass 1",
                    path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                },
                {
                    title: "Sass 2",
                    path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                },
                {
                    title: "Sass 3",
                    path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                }
            ]
        },
        {
            title: "LESS",
            path: "less",
            class: "fifth",
            color: "primary",
            info: "Here will be Information about LESS",
            subparts: [
                {
                    title: "LESS 1",
                    path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                },
                {
                    title: "LESS 2",
                    path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                },
                {
                    title: "LESS 3",
                    path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                }
            ]
        },
        {
            title: "ANGULAR",
            path: "angular",
            class: "second",
            color: "danger",
            info: "Here will be Information about Angular",
            subparts: [
                {
                    title: "Binding",
                    path: "binding"
                },
                {
                    title: "Controllers",
                    path: "controllers"
                },
                {
                    title: "Filters",
                    path: "filters"
                }
            ]
        }
    ];
    return base;
});
