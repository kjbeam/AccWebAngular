angular.module("accQueries")
        .factory('clientExtFactory', ['$http', '$q', 'saveProjectEntityID', 'baseURL', function ($http, $q, saveProjectEntityID, baseURL) {

                return {
                    clientExtension: '',
                    makeRequest: function (url) {
                        // Create the deferred object
                        var deferred = $q.defer();

                        $http.get(url).then(function (resp) {
                            deferred.resolve(resp.data);
                        });

                        return deferred.promise;
                    },
                    getClientExt: function () {
                        // Get the center name from the center shared data factory
                        var projectEntityID = saveProjectEntityID.get();
                        this.clientExtension = this.makeRequest(baseURL + "restfulservices.lxclientextension/projectEntityFK/" + projectEntityID);

                        // Return the center object stored on the service
                        return this.clientExtension;
                    }
                    
                };

            }]);



