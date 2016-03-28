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
                        $scope.expenses = [];
                        $scope.projectEntity = '';
                        $scope.show = false;
                        $scope.dataLoading = false;

                        $scope.findLease = function (pLeaseNum) {
                            $scope.show = false;
                            $scope.dataLoading = true;
                            leaseFactory.getLease(pLeaseNum).then(function (data) {
                                $scope.leases = data;
                                if ($scope.leases === null || $scope.leases.length === 0) {
                                    $scope.show = false;
                                    $scope.dataLoading = false;
                                } else {  // Lease returned good data.
                                    // Fetch the name from Project Entity
                                    projectEntityFactory.getProjectEntity($scope.leases[0].propertyId).then(function (peData) {
                                        $scope.projectEntity = peData;
                                    });
                                    // Fetch the current expenses for this lease number
                                    expensesFactory.getExpenses(pLeaseNum).then(function (exData) {
                                        $scope.expenses = exData;
                                        $scope.dataLoading = false;
                                        $scope.show = true;
                                    });
                                }
                        });
                        };
                    }]);
