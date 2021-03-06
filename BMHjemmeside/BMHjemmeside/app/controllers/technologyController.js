﻿app.controller('technologyController', function ($scope, $rootScope, $http, $sce) {

    $scope.modelToRender = null;
    $scope.teknologier = null;
    $scope.showmodel = false;
    $scope.showbrand = false;

    $http.get('../app/content/maskiner.json')
        .then(function (result) {
            $scope.teknologier = result.data;
        });

    $scope.chosenModel = function (model) {
        $scope.modelToRender = model;
        $scope.trustedDescription = $sce.trustAsHtml($scope.modelToRender.description);
    };

    $scope.checkForProspect = function (prospect) {
        return prospect.endsWith(".pdf");
    }
});