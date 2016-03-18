/* 
 * This controller will search for leases based on
 * the parameters passed to it.
 */
angular.module("accQueries")
        .controller('leaseSearchCtrl',
                ['$scope',
                    'leaseFactory',
                    function ($scope,
                            leaseFactory) {

                        $scope.leases = '';
                        $scope.show = false;

                        $scope.findLease = function (pLeaseNum) {
                            leaseFactory.getLease(pLeaseNum).then(function (data) {
                                $scope.leases = data;
                                if ($scope.leases === null) {
                                    $scope.show = false;
                                } else {
                                    $scope.show = true;
                                }
                            });
                        };

                    }]);
