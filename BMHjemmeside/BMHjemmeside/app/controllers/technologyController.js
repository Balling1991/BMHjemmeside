app.controller('technologyController', function ($scope) {

    $scope.brandToRender = null;
    $scope.modelToRender = null;

    $scope.teknologier = [
        {
            name: 'Vertikal maskincentre', brands: [
              {
                  name: 'Makino', models: [
                      {
                          name: 'V33i', path: 'app/images/v33i.jpg', description: 'The V33i vertical machining center provides high-speed machining with superb accuracy,' + 
                          'efficient chip removal and ease of operation. The spindle features Makino’s unique core-cooling and under-race lubrication system, minimizing thermal ' + 
                          'distortion at high spindle speeds. Integrated construction of the spindle and drive motor rotor reduces vibration during high-speed operation— just one more ' +
                          'reason why the V33i is your ideal hard milling machine.'
                      },
                  {
                      name: 'Test', path: '', description: 'Test'
                  }]
              }]
        },
        {
            name: 'Test', brands: [
                {
                    name: 'MST', models: [
                        { name: 'Test', path: '' }
                    ]
                },
                {
                    name: 'EMCO', models: [
                        { name: 'Emcomat E-300', path: 'app/images/Emcomat E-300.png'}
                    ]
                }
            ]
        }
    ];

    $scope.chosenBrand = function (brand) {
        $scope.brandToRender = brand;
        $scope.modelToRender = null;
    }

    $scope.chosenModel = function (model) {
        $scope.modelToRender = model;
        $scope.brandToRender = null;
    }
});