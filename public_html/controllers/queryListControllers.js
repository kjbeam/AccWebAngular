/* 
 * Controller to filter to query list based on entity selection.
 *
 */
(function() {
    'use strict';
    /*jshint eqnull:true */
    angular
        .module('accQueries')
        .constant('queryListActiveClass','btn-primary')
        .controller('queryListCtrl', queryListCtrl);
            
    function queryListCtrl ($scope, 
                            $filter, 
                            queryListActiveClass) {
        
        var selectedEntity = null;

        $scope.selectEntity = function (newEntity) {
            selectedEntity = newEntity;
        };
        
        $scope.entityFilterFn = function (query) {
            return selectedEntity == null ||
                    query.entity == selectedEntity;
        };
        
        $scope.getEntityClass = function (entity) {
            return selectedEntity == entity ? queryListActiveClass : "";
        };
    }
})();
