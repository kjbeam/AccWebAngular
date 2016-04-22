(function () {
    'use strict';

    angular
            .module("accQueries")
            .factory('expensesFactory', expensesFactory);

    function expensesFactory($http, baseURL) {

        return {
            expenses: '',
            makeRequest: function (url) {
                return $http.get(url).then(function (response) {
                    // Success
                    return response.data;
                }, function (error) {
                    // Error - Something went wrong
                    //console.dir(error);
                    return null;
                });
            },
            // Return current expenses based on lease number
            getExpenses: function (pLeaseNum) {
                this.expenses = this.makeRequest(baseURL + "restfulservices.service.vwbobjexpensestep/leaseNumber/" + pLeaseNum);
                // Return the expenses object stored on the service
                return this.expenses;
            }
        };

    }
})();


