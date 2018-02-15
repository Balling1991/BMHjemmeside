app.controller('homeController', function ($scope, $rootScope) {

    $('.navbar').addClass('transparent-menu');

    $rootScope.calcFooterWithTransMenu();

});