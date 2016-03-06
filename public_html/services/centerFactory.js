angular.module("accQueries")
    .factory('centerFactory', ['$http','$q', function($http, $q) {
        
        return {
    
    center: '',
    
    makeRequest: function(url) {
      // Create the deffered object
      var deferred = $q.defer();
      
      $http.get(url).then(function(resp) {
        deferred.resolve(resp.data);
      });
      
      return deferred.promise;
    },
    
    getCenter: function() {
      if(!this.center) {
        // Request has not been made, so make it
        console.log("Center requested, only fires once");
        this.center = this.makeRequest("http://10.236.65.95:8080/AccruentQA_DB/webresources/restfulservices.vwcustcenter/centerName/CORDOVA-239");
      }
      // Return the myObject stored on the service
      return this.center;
    }
    
  };

}]);


