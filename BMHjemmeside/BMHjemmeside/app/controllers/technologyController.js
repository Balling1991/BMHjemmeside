app.controller('technologyController', function ($scope, $http, $sce) {

    $scope.modelToRender = null;
    $scope.teknologier = null;
    $scope.showmodel = null;
    $scope.showbrand = null;
    $scope.selectedModel = null;
    var tempModelIndex = null;
    var tempBrandIndex = null;

    $http.get('../app/content/maskiner.json')
        .then(function (result) {
            $scope.teknologier = result.data;
        });

    $scope.chosenModel = function (model, index) {
        $scope.modelToRender = model;
        $scope.trustedDescription = $sce.trustAsHtml($scope.modelToRender.description);
        setActive(index);
    };

    var setActive = function (index) {
        $scope.selectedModel = index;
    };
     
    $scope.showModels = function (index) {
        if ($scope.showmodel === null) {
            tempModelIndex = index;
            $scope.showmodel = index;
        } else {
            if(tempModelIndex === index) {
                break;
            }
            $scope.showmodel = null;
        }
    };

    $scope.showBrands = function (index) {
        if ($scope.showbrand === null) {
            tempBrandIndex = index;
            $scope.showbrand = index;
        } else {
            if (tempBrandIndex === index) {
                break;
            }
            $scope.showbrand = null;
        }
    };
});