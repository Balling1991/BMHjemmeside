app.controller('technologyController', function ($scope, $http, $sce) {

    $scope.modelToRender = null;
    $scope.teknologier = null;

    $http.get('../app/content/maskiner.json')
        .then(function (result) {
            $scope.teknologier = result.data;
        });

    $scope.chosenModel = function (model) {
        $scope.modelToRender = model;
        $scope.trustedDescription = $sce.trustAsHtml($scope.modelToRender.description);
    }
});