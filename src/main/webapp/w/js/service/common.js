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
