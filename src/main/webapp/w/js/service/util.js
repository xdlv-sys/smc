services.service('util', ['common', function(common) {
    this.taxCount = function(v) {
        return v.taxRatio !== null ? (v.total * v.taxRatio / (v.taxRatio + 1)) : 0;
    };

    this.rate = function(n) {
        var rates = [];
        n.replace(/(\d+)%/g, function(s, r) {
            rates.push(parseInt(r));
        });
        return rates;
    };
    this.downloadFile = function(url, params){
        url += '?';
        angular.forEach(params, function(v,k){
            url += (k + '=' + v + '&');
        });
        window.open(url, '_self');
    };
}]);
