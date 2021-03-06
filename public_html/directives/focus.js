(function() {
    'use strict';

    angular
        .module('accQueries')
        .directive('focus', focus);

    function focus ($timeout) {
        return {
            scope: {
                trigger: '@focus'
            },
            link: function (scope, element) {
                scope.$watch('trigger', function (value) {
                    if (value === "true") {
                        $timeout(function () {
                            element[0].focus();
                        });
                    }
                });
            }
        };
    }
})();


