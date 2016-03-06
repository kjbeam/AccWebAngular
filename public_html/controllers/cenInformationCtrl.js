/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("accQueries")
    .controller('cenInformationCtrl', ['$scope', 'centerFactory', 
        function ($scope, centerFactory) {
    //try
    $scope.centers = '';
    
    centerFactory.getCenter().then(function(data) {
       $scope.centers = data; 
    });
            
    //$scope.centers = function () {
    //    centerFactory.getCenterByName('CORDOVA-239');
    //};
}]);
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
 
