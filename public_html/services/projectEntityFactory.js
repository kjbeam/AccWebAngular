angular.module("accQueries")
        .factory('projectEntityFactory', ['$http', 'baseURL', function ($http, baseURL) {

                return {
                    projectEntity: '',
                    makeRequest: function (url) {
                        return $http.get(url).then(function (response) {
                            // Success
                            return response.data;
                        }, function (error) {
                            // Error - Something went wrong
                            console.dir(error);
                            return null;
                        });
                    },
                    // Return a project entity record base on projectEntityPK
                    getProjectEntity: function (pProEntPK) {
                        this.projectEntity = this.makeRequest(baseURL + "restfulservices.lxprojectentity/" + pProEntPK);
                        // Return the Project Entity object stored on the service
                        return this.projectEntity;
                    }
                };

            }]);



