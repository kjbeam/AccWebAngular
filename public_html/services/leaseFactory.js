angular.module("accQueries")
        .factory('leaseFactory', ['$http', function ($http) {

                return {
                    leases: '',
                    makeRequest: function (url) {
                        return $http.get(url).then(function (response) {
                            //do something
                            return response.data;
                        }, function (error) {
                            //do something
                            console.dir(error);
                            return null;
                            //return error;
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




