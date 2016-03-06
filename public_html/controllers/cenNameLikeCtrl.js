angular.module("accQueries")
        .controller("cenNameLikeCtrl", function ($scope, $http) {

            $scope.findCenters = function () {
                $http.get('http://jdeowp2web:8080/AccruentQA_DB/webresources/restfulservices.lxprojectentity/cenname/' + $scope.partialCenName + '/')
                        .success(function (data) {
                            $scope.thedata = data;
                        });
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