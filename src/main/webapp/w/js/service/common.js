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

services.service('common', ['$http', 'modal', function($http, modal) {
    this.relativeUrl = function(url){
        return '../' + url;
    };
    this.loadAllPage = function(url, call) {
        return this.loadPage(url, { page: 1, limit: 999999 }, call);
    };
    this.loadPage = function(url, params, call) {
        params = params || {};
        if (params) {
            params.page = params.page || 1;
            params.limit = params.limit || 25;
        }
        return this.post(url, params, call);
    };
    this.post = function(url, params, call) {
        //remove all undefined value
        params = params || {};
        for (var k in params) {
            if (angular.isBlank(params[k])) {
                delete params[k];
            }
        }

        return $http.post(this.relativeUrl(url), params).success(function(data) {
            if (data && data.errorMsg) {
                if (call && call.fail && !call.fail(data)) {
                    return;
                } else {
                    modal.alert('操作失败，请重试或联系管理员。');
                }
            } else {
                if (call && call.success) {
                    call.success(data);
                }
            }
        });
    };

    this.uploadFile = function(url, params, conf) {
        var formData = new FormData();
        for (var key in params) {
            formData.append(key, params[key]);
        }

        modal.wait();
        $http.post(this.relativeUrl(url), formData, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        }).then(function(result) {
            if (conf && conf.success) {
                conf.success(result);
            }
            modal.hide();
        }, function(err) {
            if (conf && conf.fail) {
                conf.fail(err);
            }
            modal.hide();
        });
    };

    this.createGridOption = function(columnDefs, scope, loadData, configuration) {
        return {
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            useExternalPagination: true,
            useExternalSorting: true,
            columnDefs: columnDefs,
            configuration: configuration,
            refresh: function(start) {
                if (start) {
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
if (!angular.isFunction) {
    angular.isFunction = function(object) {
        return object && getClass.call(object) == '[object Function]';
    };
}
if (!angular.isBlank) {
    angular.isBlank = function(v) {
        return (v === null) || (v === undefined) || (v === '') || (Array.isArray(v) && v.length === 0);
    };
}
Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

Array.prototype.contains = function(compare) {
    var doCompare = function(m) {
        if (angular.isFunction(compare)) {
            return compare(m);
        }
        return compare === m;
    }
    var find = false;
    angular.forEach(this, function(v) {
        if (doCompare(v)) {
            find = true;
        }
    });
    return find;
};
Array.prototype.containsId = function(o) {
    return this.contains(function(v) {
        return v.id === o.id;
    });
};
Array.prototype.each = function(f) {
    angular.forEach(this,f);
};

if (!angular.each){
    angular.each = function(array, f){
        if (angular.isBlank(array) || !f){
            return;
        }
        var tmp;
        for (var i=0;i<array.length;i++){
            tmp = f(array[i],i);
            if (tmp){
                return tmp;
            }
        }
    };
}
