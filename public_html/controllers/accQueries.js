/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("accQueries")
        .controller("accQueriesCtrl", function($scope) {

        $scope.data = {
            queries: [
        { name: "Center by Name", 
          description: "Query centers by center name",
          entity: "Centers" },
        { name: "Project by Name", 
          description: "Query projects by project name",
          entity: "Projects" },
        { name: "Site by Name", 
          description: "Query sites by site name",
          entity: "Sites" },
        { name: "Facility by Name", 
          description: "Query facilities by facility name",
          entity: "Facilities" }]
        }
});

