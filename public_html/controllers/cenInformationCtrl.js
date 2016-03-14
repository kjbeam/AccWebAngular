/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("accQueries")
        .controller('cenInformationCtrl', 
            ['$scope', 
             'centerFactory', 
             'centerSharedDataFactory', 
             'saveProjectEntityID',
             'centerClientExtFactory', 
             'customCodeDDFieldFactory',
            function ($scope, 
                      centerFactory, 
                      centerSharedDataFactory, 
                      saveProjectEntityID, 
                      centerClientExtFactory, 
                      customCodeDDFieldFactory) {

                // Define the scope fields that will hold the Center
                // Information view data.
                $scope.centers = '';
                $scope.clientExt = '';
                $scope.customCodeDDField = '';
                $scope.totalCenterSize = '';
                $scope.metroArea = '';
                $scope.centerVol = '';
                $scope.llSpecStrProd = '';
                $scope.tier = '';
                $scope.segment = '';
                $scope.metroPop = '';

                centerFactory.getCenter().then(function (data) {
                    $scope.centers = data;
                });

                centerClientExtFactory.getClientExt().then(function (cedata) {
                    $scope.clientExt = cedata;

                    angular.forEach($scope.clientExt, function (value, index) {
                        if (value.sequenceNumber === 0 && value.codeSQLTableFK.codeSQLTablePK === 2640) {
                            $scope.totalCenterSize = value.definedField2;
                            $scope.metroArea = value.definedField1;
                            $scope.centerVol = value.definedField3;
                        }
                        if (value.sequenceNumber === 1 && value.codeSQLTableFK.codeSQLTablePK === 2640) {
                            $scope.llSpecStrProd = value.definedField1;
                            // Determine Tier and segment
                            var tierValue;
                            var segmentValue;
                            var str = value.definedField18,
                                    delimiter = '~',
                                    start = 0,
                                    tokens = str.split(delimiter).slice(start);
                            tierValue = parseInt(tokens[2]);
                            segmentValue = parseInt(tokens[3]);
                            customCodeDDFieldFactory.getCCDDFieldText(tierValue).then(function (ccddData) {
                                $scope.tier = ccddData.text;
                            });
                            customCodeDDFieldFactory.getCCDDFieldText(segmentValue).then(function (ccddData) {
                                $scope.segment = ccddData.text;
                            });
                            // Determine metro population
                            var metroPopValue;
                            var str = value.definedField19,
                                    delimiter = '~',
                                    start = 0,
                                    tokens = str.split(delimiter).slice(start);
                            metroPopValue = parseInt(tokens[9]);
                            customCodeDDFieldFactory.getCCDDFieldText(metroPopValue).then(function (ccddData) {
                                $scope.metroPop = ccddData.text;
                            });
                        }
                    });

                });

                $scope.getCenterName = centerSharedDataFactory.get();

                $scope.getProjectEntityID = saveProjectEntityID.get();

            }]);











