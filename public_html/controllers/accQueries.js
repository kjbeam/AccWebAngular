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
          entity: "Centers",
          urlroute: "centerbyname"},
        { name: "Project by Name", 
          description: "Query projects by project name",
          entity: "Projects",
          urlroute: "projectbyname" },
        { name: "Project by Project Entity ID", 
          description: "Query projects by project entity ID",
          entity: "Projects",
          urlroute: "projectbyentityid" }, 
        { name: "Site by Name", 
          description: "Query sites by site name",
          entity: "Sites",
          urlroute: "sitebyname" },
        { name: "Facility by Name", 
          description: "Query facilities by facility name",
          entity: "Facilities",
          urlroute: "facilitybyname" }]
        }
});

