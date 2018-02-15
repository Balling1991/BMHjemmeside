app.controller('homeController', function ($scope, $rootScope) {

    $('.navbar').addClass('transparent-menu');

    if ($rootScope.detectIE() !== false) {
        $rootScope.positionFooterIE(".video-container");
    } else {
        $rootScope.positionFooterOther();
    }
});