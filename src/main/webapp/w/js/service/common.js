services.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.transformRequest = function(obj) {
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
}]).config(['$locationProvider', function($locationProvider) {
    /*$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/
}]);

services.service('common', ['$http','modal', function($http, modal) {
    this.loadAllPage = function(url, call) {
        this.loadPage(url, { page: 1, limit: 999999 }, call);
    };
    this.loadPage = function(url, params, call) {
        params = params || {};
        if (params) {
            params.page = params.page || 1;
            params.limit = params.limit || 25;
        }
        this.post(url, params, call);
    };
    this.post = function(url, params, call) {
        //remove all undefined value
        params = params || {};
        for (var k in params) {
            if (angular.isBlank(params[k])) {
                delete params[k];
            }
        }
        
        $http.post(url, params).success(function(data) {
            if (data && data.errorMsg) {
                if (call.fail) {
                    call.fail(data);
                } else {
                    modal.alert('操作失败，请重试或联系管理员。');
                }
            } else {
                if (call.success) {
                    call.success(data);
                }
            }
        });
    };

    this.uploadFile = function(url, params,conf){
        var formData = new FormData();
        for (var key in params){
            formData.append(key, params[key]);
        }

        modal.wait();
        $http.post(url, formData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(function(result) {
            if (conf && conf.success){
                conf.success(result);
            }
            modal.hide();    
        }, function(err) {
            if (conf && conf.fail){
                conf.fail(err);
            } 
            modal.hide();
        });
    };

    this.createGridOption = function(columnDefs, scope, loadData,configuration) {
        return {
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            useExternalPagination: true,
            useExternalSorting: true,
            columnDefs: columnDefs,
            configuration: configuration,
            refresh: function(start) {
                if (start){
                    this.paginationCurrentPage = 1;
                }
                loadData(this.paginationCurrentPage, this.paginationPageSize);
            },
            paginationTemplate: 'js/tpl/pagination.html',
            onRegisterApi: function(gridApi) {
                if (!this.selection) {
                    this.selection = gridApi.selection;
                    gridApi.pagination.on.paginationChanged(scope, loadData);
                }

            }
        };
    }
}]);
if (!angular.isFunction){
    angular.isFunction = function(object){
        return object && getClass.call(object) == '[object Function]';
    };
}
if (!angular.isBlank){
    angular.isBlank = function(v){
        return (v === null) || (v === undefined) || (v === '') || (Array.isArray(v) && v.length === 0);
    };
}

Array.prototype.contains = function(compare) {
    var doCompare = function(m){
        if (angular.isFunction(compare)){
            return compare(m);
        }
        return compare === m;
    }
    var find = false;
    angular.forEach(this,function(v){
        if (doCompare(v)){
            find = true;
        }
    });
    return find;
};
Array.prototype.containsId = function(o) {
    return this.contains(function(v){
        return v.id === o.id;
    });
};

Array.prototype.each = function(f) {
    angular.forEach(this, f);
};
