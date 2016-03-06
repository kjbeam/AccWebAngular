// This is the main module for the application.

'use strict';

angular.module("accQueries",["customFilters","ngRoute"])      
                    .config(function ($routeProvider) {
                        $routeProvider.when("/", {
                            templateUrl: "views/queryList.html"
                        });
                        $routeProvider.when("/centerbyname", {
                            templateUrl: "views/center/centerByName.html"
                        });
                        $routeProvider.when("/facilitybyname", {
                            templateUrl: "views/facility/facilityByName.html"
                        });
                        $routeProvider.when("/projectbyname", {
                            templateUrl: "views/project/projectByName.html"
                        });
                        $routeProvider.when("/projectbyentityid", {
                            templateUrl: "views/project/projectByEntityId.html"
                        });
                        $routeProvider.when("/sitebyname", {
                            templateUrl: "views/site/siteByName.html"
                        });
                        $routeProvider.when("/cenInfo", {
                            templateUrl: "views/center/centerInfo.html"
                        });
                        $routeProvider.otherwise({
                            redirectTo: "/"
                        });
                        
            });     


