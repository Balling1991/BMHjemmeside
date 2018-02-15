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

    $rootScope.positionFooterIE = function (content) {
         //set initial footer margin
        var initContentHeight = $(content).height();
        $(".footer").css('margin-top', initContentHeight + "px");

        $(window).resize(function () {
            var contentHeight = $(content).height()
            if (initContentHeight !== contentHeight) {
                $(".footer").css('margin-top', (contentHeight) + "px");
                initContentHeight = contentHeight;
            }
        });

        $(content).bind('heightChange', function () {
            var contentHeight = $(content).height();
            $(".footer").css('margin-top', (contentHeight) + "px");
        });
    }

    $rootScope.positionFooterOther = function () {
         //set initial footer margin
        var footerHeight = $(".footer").height();
        $(".footer").css('margin-bottom', (footerHeight * -1) + "px");

        $(window).resize(function () {
            var checkHeight = $(".footer").height()
            if (footerHeight !== checkHeight) {
                $(".footer").css('margin-bottom', (checkHeight * -1) + "px");
                footerHeight = checkHeight;
            }
        });
    }

    $rootScope.detectIE = function () {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        // other browser
        return false;
    }
});


var initPage = function () {
    $("a.menu").removeClass("active");
    $(".navbar").removeClass("transparent-menu");
    var page = (window.location.hash).slice(2);
    $("#" + page).addClass("active");
    $(".footer").css('margin-top', "0");
}

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function () {
        initPage();
    })
})
