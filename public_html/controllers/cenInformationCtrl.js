/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("accQueries")
    .controller('cenInformationCtrl', ['$scope', 'centerFactory', 'centerSharedDataFactory', 
        function ($scope, centerFactory, centerSharedDataFactory) {
   
    $scope.centers = '';
    
    centerFactory.getCenter().then(function(data) {
       $scope.centers = data; 
    });
    
    $scope.getCenterName = centerSharedDataFactory.get();
            
}]);
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
 
