angular.module("accQueries")
        .controller("cenNameLikeCtrl", function ($scope, $http, centerSharedDataFactory, saveProjectEntityID) {

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
        })
        .directive('focus',
                function ($timeout) {
                    return {
                        scope: {
                            trigger: '@focus'
                        },
                        link: function (scope, element) {
                            scope.$watch('trigger', function (value) {
                                if (value === "true") {
                                    $timeout(function () {
                                        element[0].focus();
                                    });
                                }
                            });
                        }
                    };
                   
        });