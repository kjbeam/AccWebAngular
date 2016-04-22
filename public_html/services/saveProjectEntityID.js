/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function() {
    'use strict';

    angular
        .module('accQueries')
        .factory('saveProjectEntityID', saveProjectEntityID);

    function saveProjectEntityID() {
            var savedData = {};
            function set(data) {
                savedData = data;
            }
            function get() {
                return savedData;
            }

            return {
                set: set,
                get: get
            };
        }
})();

