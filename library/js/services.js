"use strict";

app.factory("base", function () {
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

