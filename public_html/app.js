// This is the main module for the application.
// Routing definitions are defined here.

(function() {
'use strict';

angular
    .module("accQueries",["customFilters","ngRoute"])
    .constant('baseURL', 'http://jdeowp2web:8080/AccruentPROD_DB/webresources/')

    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "views/queryList.html"
        });
        $routeProvider.when("/centerbyname", {
            templateUrl: "views/center/centerByName.html"
        });
        $routeProvider.when("/cenInfo", {
            templateUrl: "views/center/centerInfo.html"
        });
        $routeProvider.when("/leaseSearchNum", {
            templateUrl: "views/lease/leaseSearchNum.html"
        });
        $routeProvider.when("/leaseSearchName", {
            templateUrl: "views/lease/leaseSearchName.html"
        });
        $routeProvider.when("/leaseExpenses", {
            templateUrl: "views/lease/leaseExpenses.html"
        });

        $routeProvider.otherwise({
            redirectTo: "/"
        });

    });
})();
