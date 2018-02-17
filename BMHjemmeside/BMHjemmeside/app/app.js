var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'app/templates/home.html',
            controller: 'homeController'
        })

        .when('/about', {
            templateUrl: 'app/templates/about.html',
            controller: 'aboutController'
        })

        .when('/contact', {
            templateUrl: 'app/templates/contact.html',
            controller: 'contactController'
        })

        .when('/showroom', {
            templateUrl: 'app/templates/showroom.html',
            controller: 'showroomController'
        })

        .when('/service', {
            templateUrl: 'app/templates/service.html',
            controller: 'serviceController'
        })

        .when('/technology', {
            templateUrl: 'app/templates/technology.html',
            controller: 'technologyController'
        })
        .otherwise({ redirectTo: '/home' });
});

app.controller('appController', function ($rootScope) {
});



var initPage = function () {
    $("a.menu").removeClass("active");
    $(".home").removeClass("home");
    $(".navbar").removeClass("transparent-menu");
    var page = (window.location.hash).slice(2);
    $("#" + page).addClass("active");
}

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function () {
        initPage();
    })
})
