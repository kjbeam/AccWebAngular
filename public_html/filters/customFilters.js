/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module("customFilters",[])
        .filter("unique", function() {
            return function (data, propertyName) {
                if (angular.isArray(data) && angular.isString(propertyName)) {
                    var results = [];
                    var keys = {};
                    for (var i = 0; i < data.length; i++) {
                        var val = data[i][propertyName];
                        if (angular.isUndefined(keys[val])) {
                            keys[val] = true;
                            results.push(val);
                        }
                    }
                    return results;
                } else {
                    return data;
            }
        }    
});

