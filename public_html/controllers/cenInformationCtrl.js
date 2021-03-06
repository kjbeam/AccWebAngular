/* 
 * Center Information Controller
 * 
 * Pull all the information for the center information 
 * screen (centerInfo.html)
 * 
 */
(function() {
    'use strict';

    angular
        .module('accQueries')
        .controller('cenInformationCtrl', cenInformationCtrl);

    function cenInformationCtrl($scope, 
                                centerFactory, 
                                centerSharedDataFactory, 
                                saveProjectEntityID, 
                                clientExtFactory, 
                                customCodeDDFieldFactory,
                                employerFactory) {

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
        $scope.employer = '';

        centerFactory.getCenter().then(function (data) {
            $scope.centers = data;

            // Fetch the Developer name from the employerFactory.
            employerFactory.getEmployerData($scope.centers.developer).then(function (empData) {
                $scope.employer = empData;
            });
        });

        clientExtFactory.getClientExt().then(function (cedata) {
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
                    var popStr = value.definedField19,
                            popDelimiter = '~',
                            popStart = 0,
                            popTokens = popStr.split(popDelimiter).slice(popStart);
                    metroPopValue = parseInt(popTokens[9]);
                    customCodeDDFieldFactory.getCCDDFieldText(metroPopValue).then(function (ccddData) {
                        $scope.metroPop = ccddData.text;
                    });
                }
            });

        });

        $scope.getCenterName = centerSharedDataFactory.get();

        $scope.getProjectEntityID = saveProjectEntityID.get();

    }
    
})();
