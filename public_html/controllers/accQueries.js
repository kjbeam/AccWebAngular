/* 
 * Controller to define the JSON object that holds the
 * definition for the different queries that are available.
 * 
 */
(function() {
    'use strict';

    angular
        .module('accQueries')
        .controller('accQueriesCtrl', accQueriesCtrl);  

        function accQueriesCtrl($scope) {

            $scope.data = {
                queries: [
                    { name: "Center by Name", 
                      description: "Query centers by center name",
                      entity: "Centers",
                      urlroute: "centerbyname"},
                    { name: "Lease Expenses",
                      description: "Lease Expenses by Lease #",
                      entity: "Leases",
                      urlroute: "leaseSearchNum"},
                    { name: "Lease Expenses",
                      description: "Lease Expenses by Lease Name",
                      entity: "Leases",
                      urlroute: "leaseSearchName"}]
            };
    }
})();
