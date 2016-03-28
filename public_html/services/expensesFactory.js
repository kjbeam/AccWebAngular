angular.module("accQueries")
        .factory('expensesFactory', ['$http', function ($http) {

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
                        this.expenses = this.makeRequest("http://jdeowp2web:8080/AccruentQA_DB/webresources/restfulservices.service.vwbobjexpensestep/leaseNumber/" + pLeaseNum);
                        // Return the expenses object stored on the service
                        return this.expenses;
                    }
                };

            }]);


