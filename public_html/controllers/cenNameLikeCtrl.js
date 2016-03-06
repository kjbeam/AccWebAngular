angular.module("accQueries")
        .controller("cenNameLikeCtrl", function ($scope, $http, centerSharedDataFactory) {

            $scope.findCenters = function () {
                $http.get('http://jdeowp2web:8080/AccruentQA_DB/webresources/restfulservices.lxprojectentity/cenname/' + $scope.partialCenName + '/')
                        .success(function (data) {
                            $scope.thedata = data;
                        });
            };
            $scope.setCenterName = function(currObj){
                centerSharedDataFactory.set(currObj);
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