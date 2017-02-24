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

    this.preview = function(oper) {
        if (oper < 10) {
            bdhtml = window.document.body.innerHTML;
            sprnstr = "<!--startprint" + oper + "-->";
            eprnstr = "<!--endprint" + oper + "-->";
            prnhtml = bdhtml.substring(bdhtml.indexOf(sprnstr) + 18);

            prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr));
            window.document.body.innerHTML = prnhtml;
            window.print();
            window.document.body.innerHTML = bdhtml;
        } else {
            window.print();
        }
    };
    
}]);
