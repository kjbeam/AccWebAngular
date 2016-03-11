/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("accQueries")
    .controller('cenInformationCtrl', ['$scope', 'centerFactory', 'centerSharedDataFactory', 'saveProjectEntityID', 'centerClientExtFactory',
        function ($scope, centerFactory, centerSharedDataFactory, saveProjectEntityID, centerClientExtFactory) {
   
    $scope.centers = '';
    $scope.clientExt = '';
    $scope.totalCenterSize = '';
    $scope.metroArea = '';
    $scope.centerVol = '';
    $scope.llSpecStrProd = '';
    
    centerFactory.getCenter().then(function(data) {
       $scope.centers = data; 
    });
    
    centerClientExtFactory.getClientExt().then(function(cedata) {
       $scope.clientExt = cedata; 
       
       angular.forEach($scope.clientExt, function(value,index) {
        if (value.sequenceNumber === 0 && value.codeSQLTableFK.codeSQLTablePK === 2640) {
                $scope.totalCenterSize = value.definedField2;
                $scope.metroArea = value.definedField1;
                $scope.centerVol = value.definedField3;
            } 
        if (value.sequenceNumber === 1 && value.codeSQLTableFK.codeSQLTablePK === 2640) {
                $scope.llSpecStrProd = value.definedField1;
            } 
        });
       
    });
    
    $scope.getCenterName = centerSharedDataFactory.get();
    
    $scope.getProjectEntityID = saveProjectEntityID.get();
            
}]);
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
 
