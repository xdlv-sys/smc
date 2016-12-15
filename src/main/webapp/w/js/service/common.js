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
        //remove all undefined value
        params = params || {};
        for (var k in params){
            if (!params[k]){
                delete params[k];
            }
        }
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

    this.createGridOption = function(columnDefs, scope, loadData){
        return {
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            useExternalPagination: true,
            useExternalSorting: true,
            columnDefs: columnDefs,
            refresh: function(){
                loadData(this.paginationCurrentPage, this.paginationPageSize);
            },
            paginationTemplate: 'js/tpl/pagination.html',
            onRegisterApi: function(gridApi){
                if (!this.selection){
                    this.selection =  gridApi.selection;
                    gridApi.pagination.on.paginationChanged(scope,loadData);
                }
                
            }
        };
    }
}]);

Array.prototype.contains = function (obj, compare) {
    return this.containsOf(function(v){
        if (compare){
            return compare(v, obj);
        } else {
            return v === obj;
        }
    });
    
};
Array.prototype.containsOf = function (compare) {
    var find;
    for (var i in this){
        if (compare(this[i])){
            find = this[i];
            break;
        }
    }
    return find;
};
Array.prototype.each = function (f) {
    angular.forEach(this,f);
};
