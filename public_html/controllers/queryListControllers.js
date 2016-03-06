/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("accQueries")
        .constant("queryListActiveClass","btn-primary")
        .controller("queryListCtrl", function ($scope, $filter, queryListActiveClass) {
        
        var selectedEntity = null;

        $scope.selectEntity = function (newEntity) {
            selectedEntity = newEntity;
        }
        
        $scope.entityFilterFn = function (query) {
            return selectedEntity == null ||
                    query.entity == selectedEntity;
        }
        
        $scope.getEntityClass = function (entity) {
            return selectedEntity == entity ? queryListActiveClass : "";
        }
});

