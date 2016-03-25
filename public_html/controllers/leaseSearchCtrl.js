/* 
 * This controller will search for leases based on
 * the parameters passed to it.
 */
angular.module("accQueries")
        .controller('leaseSearchCtrl',
                ['$scope',
                    'leaseFactory',
                    'projectEntityFactory',
                    'expensesFactory',
                    function ($scope,
                            leaseFactory,
                            projectEntityFactory,
                            expensesFactory) {

                        $scope.leases = '';
                        $scope.expenses = '';
                        $scope.projectEntity = '';
                        $scope.show = false;

                        $scope.findLease = function (pLeaseNum) {
                            leaseFactory.getLease(pLeaseNum).then(function (data) {
                                $scope.leases = data;
                                if ($scope.leases === null) {
                                    $scope.show = false;
                                } else {  // Lease returned good data.
                                    // Fetch the name from Project Entity
                                    projectEntityFactory.getProjectEntity($scope.leases.propertyId).then(function (peData) {
                                        $scope.projectEntity = peData;
                                    });
                                    // Fetch the current expenses for this lease number
                                    expensesFactory.getExpenses($scope.leases.leaseNumber).then(function (exData) {
                                        $scope.expenses = exData;
                                    });
                                    $scope.show = true;
                                }
                            });
                        };

                    }]);
