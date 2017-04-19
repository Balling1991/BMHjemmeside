app.controller('technologyController', function ($scope, $http) {

    $scope.brandToRender = null;
    $scope.modelToRender = null;
    $scope.teknologier = null;

    $http.get('app/content/Maskiner.json')
        .then(function (result) {
            $scope.teknologier = result.data;
        });

    $scope.chosenBrand = function (brand) {
        $scope.brandToRender = brand;
        $scope.modelToRender = null;
    }

    $scope.chosenModel = function (model) {
        $scope.modelToRender = model;
        $scope.brandToRender = null;
    }
});