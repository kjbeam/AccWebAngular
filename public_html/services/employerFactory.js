/*
 *  Factory to bring back data from Lx_Employer by the employerPK
 */
angular.module("accQueries")
        .factory('employerFactory', ['$http', '$q', function ($http, $q) {

                return {
                    employerData: '',
                    makeRequest: function (url) {
                        // Create the deferred object
                        var deferred = $q.defer();

                        $http.get(url).then(function (resp) {
                            deferred.resolve(resp.data);
                        });

                        return deferred.promise;
                    },
                    getEmployerData: function (val) {
                        // Get the employer data based on employerPK
                        this.employerData = this.makeRequest("http://10.236.65.95:8080/AccruentQA_DB/webresources/restfulservices.lxemployer/" + val);

                        // Return the center object stored on the service
                        return this.employerData;
                    }
                    
                };

            }]);


