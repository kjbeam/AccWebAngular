angular.module("accQueries")
        .factory('centerClientExtFactory', ['$http', '$q', 'saveProjectEntityID', function ($http, $q, saveProjectEntityID) {

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
                        this.clientExtension = this.makeRequest("http://10.236.65.95:8080/AccruentQA_DB/webresources/restfulservices.lxclientextension/projectEntityFK/" + projectEntityID);

                        // Return the center object stored on the service
                        return this.clientExtension;
                    }
                    
                };

            }]);



