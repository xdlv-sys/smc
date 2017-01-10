/**
 * all types status configurations will be loaded when needed
 */
services.factory('supplierTypeName', ['$http','$q',function($http, $q) {
    return {
        success: function(success) {
            var me = this;
            if (me.data) {
            	//ok we just simulate the async operation with promise
                var deferred = $q.defer();
                deferred.promise.then(function() {
                    success(me.data);
                });
                deferred.resolve();
            } else {
                $http.get('../supplier/obtainSupplierTypeNames.cmd').success(function(data) {
                    var allSupplierTypes = [];
                    angular.forEach(data.data, function(v) {
                        allSupplierTypes[v.degree] = allSupplierTypes[v.degree] || [];
                        allSupplierTypes[v.degree].push(v);
                    });

                    me.data = allSupplierTypes;
                    success(me.data);
                });
            }
        }
    };
}]);
