(function () {
    'use strict';

    angular
            .module('accQueries')
            .factory('centerSharedDataFactory', centerSharedDataFactory);

    function centerSharedDataFactory() {
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
