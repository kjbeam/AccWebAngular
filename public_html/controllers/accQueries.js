/* 
 * Controller to define the JSON object that holds the
 * definition for the different queries that are available.
 * 
 */
angular.module("accQueries")
        .controller("accQueriesCtrl", 
            ['$scope', 
             function($scope) {

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
}]);

