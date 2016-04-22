(function() {
    'use strict';

    angular
        .module('accQueries')
        .controller('cenNameLikeCtrl', cenNameLikeCtrl);
  
    function cenNameLikeCtrl ($scope, $http, centerSharedDataFactory, saveProjectEntityID) {
        // TODO Create a service for this....
        $scope.findCenters = function () {
            $http.get('http://jdeowp2web:8080/AccruentQA_DB/webresources/restfulservices.lxprojectentity/cenname/' + $scope.partialCenName + '/')
                    .success(function (data) {
                        $scope.thedata = data;
                    });
        };
        // Save the center name for sharing between controllers
        $scope.setCenterName = function(currObj){
            centerSharedDataFactory.set(currObj);
        };
        // Save the project entity ID for sharing between controllers
        $scope.setProjectEntityID = function(currObj){
            saveProjectEntityID.set(currObj);
        };
    }
})();