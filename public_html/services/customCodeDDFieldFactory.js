/*
 *  Factory to bring back data from Lx_customCodeDropdownField by the PK
 */
angular.module("accQueries")
        .factory('customCodeDDFieldFactory', ['$http', '$q', 'baseURL', function ($http, $q, baseURL) {

                return {
                    customCodeDDField: '',
                    makeRequest: function (url) {
                        // Create the deferred object
                        var deferred = $q.defer();

                        $http.get(url).then(function (resp) {
                            deferred.resolve(resp.data);
                        });

                        return deferred.promise;
                    },
                    getCCDDFieldText: function (val) {
                        // Get the center name from the center shared data factory
                        //var projectEntityID = saveProjectEntityID.get();
                        this.customCodeDDField = this.makeRequest(baseURL + "restfulservices.lxcustomdropdownfield/" + val);

                        // Return the center object stored on the service
                        return this.customCodeDDField;
                    }
                    
                };

            }]);

