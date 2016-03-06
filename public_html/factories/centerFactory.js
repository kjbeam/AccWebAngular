angular.module("accQueries")
    .factory('centerFactory', ['$http', function($http) {

        var urlBase = 'http://10.236.65.95:8080/AccruentQA_DB/webresources/restfulservices.vwcustcenter';
        var centerFactory = {};  // New Instance

        centerFactory.getCenters = function () {
        return $http.get(urlBase + '/');
        };
            
        centerFactory.getCenterByName = function (centerName) {
            return $http.get(urlBase + '/centerName/' + centerName);
        };
        
        centerFactory.getCenterByPK = function (centerPK) {
            return $http.get(urlBase + '/centerPK/' + centerPK + '/');
        };

        return centerFactory;  // Return the service instance
}]);


