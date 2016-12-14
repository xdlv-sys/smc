services.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.transformRequest = function (obj) {
        var str = [];
        for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    };
}]).config(['$locationProvider', function ($locationProvider) {
    /*$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/
}]);

services.service('common', ['$http', function($http){
    this.loadPage = function(url, params, call){
        params = params || {};
        if (params){
            params.page = params.page || 1;
            params.limit = params.limit || 25;
        }
        this.post(url, params, call);
    };
    this.post = function(url,params,call){
        $http.post(url,params).success(function(data){
            if (data && data.errorMsg){
                if (call.fail){
                    call.fail(data);
                }
            } else {
                if (call.success){
                    call.success(data);
                }
            }
        });
    };

    this.createGridOption = function(columnDefs, scope){
        return {
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            columnDefs: columnDefs,
            paginationTemplate: 'js/tpl/pagination.html',
            onRegisterApi: function(gridApi){
                scope.gridApi = gridApi;
            }
        };
    }
}]);

Array.prototype.contains = function (obj, compare) {
    var contains = false;
    for (var i in this){
        if (compare) {
            contains = compare(this[i],obj);
        } else {
            contains = this[i] === obj;
        }
        if (contains){
            break;
        }
    }
    return contains;
};
Array.prototype.each = function (f) {
    angular.forEach(this,f);
};
