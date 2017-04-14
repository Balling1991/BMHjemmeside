var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
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

        .otherwise({ redirectTo: '/' });
});

app.controller('appController', function ($scope) {

    $scope.selectedMenu = "home";

});