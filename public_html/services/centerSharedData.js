angular.module("accQueries")
        .factory('centerSharedDataFactory', function () {
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

        })
        .factory('saveProjectEntityID', function() {
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
        });
