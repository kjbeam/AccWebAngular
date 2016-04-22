/*
 *  Factory to bring back data from Lx_Employer by the employerPK
 */
(function () {
    'use strict';

    angular.module('accQueries')
            .factory('employerFactory', employerFactory);

    function employerFactory($http, $q, baseURL) {

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
                this.employerData = this.makeRequest(baseURL + "restfulservices.lxemployer/" + val);

                // Return the center object stored on the service
                return this.employerData;
            }

        };

    }
})();


