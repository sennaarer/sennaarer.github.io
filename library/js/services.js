"use strict";

app.factory("base", function () {
    var base = {};
    base = [
        {
            title: "HAML",
            path: "haml",
            class: "forth",
            color: "success",
            subparts: [
                {
                title: "Haml 1",
                path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                },
                {
                title: "Haml 2",
                path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                },
                {
                title: "Haml 3",
                path: "http://plnkr.co/edit/vWFliiEH1lJRItoxoeMk?p=preview"
                }
            ]
        },
        {
            title: "SASS",
            path: "sass",
            class: "third",
            color: "info",
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

app.factory("angular", function () {
    var angular = {};
    angular = [
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
            ];


    return angular;
});
