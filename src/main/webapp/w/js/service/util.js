services.service('util', ['common', function(common) {
    this.taxCount = function(v) {
        return v.taxRatio !== null ? (v.total * v.taxRatio / (v.taxRatio + 1)) : 0;
    }
}]);
