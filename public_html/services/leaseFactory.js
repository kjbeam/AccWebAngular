angular.module("accQueries")
        .factory('leaseFactory', ['$http', function ($http) {

                return {
                    leases: '',
                    makeRequest: function (url) {
                        return $http.get(url).then(function (response) {
                            // Success
                            return response.data;
                        }, function (error) {
                            // Error - Something went wrong
                            console.log('Status: ' + error.status + '  Data: ' + error.statusText); 
                            return null;
                        });
                    },
                    // Return a single lease based on lease number
                    getLease: function (pLeaseNum) {
                        this.leases = this.makeRequest("http://10.236.65.95:8080/AccruentQA_DB/webresources/restfulservices.latbllease/leaseNumber/" + pLeaseNum);
                        // Return the lease object stored on the service
                        return this.leases;
                    },
                    // Return all leases based on lease name
                    getLeases: function () {
                        this.leases = this.makeRequest("http://10.236.65.95:8080/AccruentQA_DB/webresources/restfulservices.latbllease/name/");

                        // Return the lease object stored on the service
                        return this.leases;
                    }
                };

            }]);




