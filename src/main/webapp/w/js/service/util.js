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
    this.downloadFile = function(url, params) {
        url += '?';
        angular.forEach(params, function(v, k) {
            url += (k + '=' + v + '&');
        });
        window.open(url, '_self');
    };

    this.preview = function(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var popupWin = window.open('', '_blank', 'width=600,height=600');
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/app.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
        popupWin.document.close();
    };

}]);
