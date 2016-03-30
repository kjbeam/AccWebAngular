angular.module("accQueries")
        .factory('leaseFactory', ['$http', function ($http) {

                return {
                    leases: '',
                    makeRequest: function (url) {
                        return $http.get(url).then(function (response) {
                            // Success
                            return response.data;
                        }, function (response) {
                            // Error - Something went wrong
                            console.log('Status: ' + response.status + '  StatusText: ' + response.statusText + '  Config: ' + response.config + ' Data :' + response.data); 
                            return null;
                        });
                    },
                    // Return a single lease based on lease number
                    getLease: function (pLeaseNum) {
                        this.leases = this.makeRequest("http://jdeowp2web:8080/AccruentQA_DB/webresources/restfulservices.latbllease/leaseNumber/" + pLeaseNum);
                        // Return the lease object stored on the service
                        return this.leases;
                    },
                    // Return all leases based on lease name
                    getLeases: function (pLeaseName) {
                        this.leases = this.makeRequest("http://jdeowp2web:8080/AccruentQA_DB/webresources/restfulservices.latbllease/name/" + pLeaseName);

                        // Return the lease object stored on the service
                        return this.leases;
                    }
                };

            }]);



