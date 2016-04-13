angular.module("accQueries")
        .factory('centerFactory', ['$http', '$q', 'centerSharedDataFactory','baseURL', function ($http, $q, centerSharedDataFactory, baseURL) {

                return {
                    center: '',
                    makeRequest: function (url) {
                        // Create the deferred object
                        var deferred = $q.defer();

                        $http.get(url).then(function (resp) {
                            deferred.resolve(resp.data);
                        });

                        return deferred.promise;
                    },
                    getCenter: function () {
                        // Get the center name from the center shared data factory
                        var cenName = centerSharedDataFactory.get();
                        this.center = this.makeRequest(baseURL + "restfulservices.vwcustcenter/centerName/" + cenName);

                        // Return the center object stored on the service
                        return this.center;
                    }
                    
                };

            }]);


