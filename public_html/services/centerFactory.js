angular.module("accQueries")
    .factory('centerFactory', ['$http','$q', 'centerSharedDataFactory', function($http, $q, centerSharedDataFactory) {
        
        return {
    
    center: '',
    
    makeRequest: function(url) {
      // Create the deferred object
      var deferred = $q.defer();
      
      $http.get(url).then(function(resp) {
        deferred.resolve(resp.data);
      });
      
      return deferred.promise;
    },
    
    getCenter: function() {
      // Get the center name from the center shared data factory
      var cenName = centerSharedDataFactory.get();
      this.center = this.makeRequest("http://10.236.65.95:8080/AccruentQA_DB/webresources/restfulservices.vwcustcenter/centerName/" + cenName);

      // Return the center object stored on the service
      return this.center;
    }
    
  };

}]);


