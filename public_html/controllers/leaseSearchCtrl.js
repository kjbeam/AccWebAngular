/* 
 * This controller will search for leases based on
 * the parameters passed to it.
 */
(function () {
    'use strict';

    angular
            .module('accQueries')
            .controller('leaseSearchCtrl', leaseSearchCtrl);

    function leaseSearchCtrl($scope,
            leaseFactory,
            projectEntityFactory,
            expensesFactory) {

        $scope.leases = '';
        $scope.expenses = [];
        $scope.projectEntity = '';
        $scope.show = false;
        $scope.showDetails = false;
        $scope.dataLoading = false;
        $scope.index = 0;

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

        $scope.findLeasesByName = function (pLeaseName) {
            $scope.show = false;
            $scope.dataLoading = true;
            leaseFactory.getLeases(pLeaseName).then(function (data) {
                $scope.leases = data;
                if ($scope.leases === null || $scope.leases.length === 0) {
                    $scope.show = false;
                    $scope.dataLoading = false;
                } else {
                    // Lease returned good data.
                    // Loop through the leases that were returned
                    // and for each one fetch the facility name from Project Entity
                    // and add it to the leases object

                    angular.forEach($scope.leases, function (value, index) {
                        projectEntityFactory.getProjectEntity(value.propertyId).then(function (peData) {
                            $scope.projectEntity = peData;
                            value.facName = $scope.projectEntity.name;
                        });
                    });

                    $scope.dataLoading = false;
                    $scope.show = true;
                }
            });
        };

        $scope.getExpenseDetails = function (pLeaseNum, index) {
            // Fetch the current expenses for this lease number
            $scope.showDetails = false;
            $scope.dataLoading = true;

            expensesFactory.getExpenses(pLeaseNum).then(function (exData) {
                $scope.expenses = exData;
                $scope.index = index;
                $scope.dataLoading = false;
                $scope.show = true;
                $scope.showDetails = true;
            });
        };

    }
})();
