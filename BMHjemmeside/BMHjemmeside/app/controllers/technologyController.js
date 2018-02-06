app.controller('technologyController', function ($scope, $http, $sce) {

    $scope.modelToRender = null;
    $scope.teknologier = null;
    $scope.showmodels = false;
    $scope.selectedModel = null;

    $http.get('../app/content/maskiner.json')
        .then(function (result) {
            $scope.teknologier = result.data;
        });

    $scope.chosenModel = function (model, index) {
        $scope.modelToRender = model;
        $scope.trustedDescription = $sce.trustAsHtml($scope.modelToRender.description);
        setActive(index);
    }

    var setActive = function (index) {
        $scope.selectedModel = index;
    };
});