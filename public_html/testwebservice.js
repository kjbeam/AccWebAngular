/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("accQueries")
        .controller("tester", function ($scope, $http) {

            $scope.findCenters = function () {
                $http.get('http://localhost:8080/AccruentQA_DB/webresources/restfulservices.lxprojectentity/cenname/' + $scope.partialCenName + '/')
                        .success(function (data) {
                            $scope.thedata = data;
                        });
            };

        });