angular.module('xdApp', [
    'xdApp.controllers',
    'ngAnimate',
    'ui.router',
    'ngMaterial', 'ngMessages',
    'ngAria',
    'ui.grid', 'ui.grid.pagination', 'ui.grid.selection', 'ui.grid.autoResize','ui.grid.edit',
    'multiselect-searchtree', 'ngPopover',
    'ui.tree', 'lfNgMdFileInput'
]).config(['$mdDateLocaleProvider', function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    $mdDateLocaleProvider.shortMonths = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    $mdDateLocaleProvider.days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
    $mdDateLocaleProvider.shortDays = ['一', '二', '三', '四', '五', '六', '日'];

    $mdDateLocaleProvider.formatDate = function(date) {
        //manually formate the date style
        if (angular.isDate(date)) {
            return date.Format("yyyy-MM-dd");
        }
        return date;
    };
}]).config(['$mdIconProvider', '$mdThemingProvider', function($mdIconProvider, $mdThemingProvider) {
    /*$mdThemingProvider.theme('default')
        .primaryPalette('light-blue', {
            'default': '300'
        })
        .accentPalette('deep-orange', {
            'default': '500'
        });*/
    $mdIconProvider
        .defaultIconSet("./img/svg/avatars.svg", 128)
        .icon("menu", "./img/svg/menu.svg", 24)
        .icon("share", "./img/svg/share.svg", 24)
        .icon("google_plus", "./img/svg/google_plus.svg", 24)
        .icon("hangouts", "./img/svg/hangouts.svg", 24)
        .icon("twitter", "./img/svg/twitter.svg", 24)
        .icon("phone", "./img/svg/phone.svg", 24);

}]).config(['$stateProvider', '$urlRouterProvider', '$logProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider.state('user', {
            url: '/user',
            templateUrl: 'user.html',
            controller: 'UserCtrl'
        }).state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: 'LoginCtrl'
        }).state('conf', {
            url: '/conf',
            templateUrl: 'conf.html',
            controller: 'ConfCtrl'
        }).state('product', {
            url: '/product',
            templateUrl: 'product.html',
            controller: 'ProductCtrl'
        }).state('product-item', {
            url: '/product-item',
            params: { product: null },
            templateUrl: 'product-item.html',
            controller: 'ProductItemCtrl'
        }).state('project', {
            url: '/project',
            templateUrl: 'project.html',
            controller: 'ProjectCtrl'
        }).state('project-item', {
            url: '/project-item',
            params: { project: null },
            templateUrl: 'project-item.html',
            controller: 'ProjectItemCtrl'
        }).state('budget', {
            url: '/budget',
            templateUrl: 'budget.html',
            controller: 'BudgetCtrl'
        }).state('budget-item', {
            url: '/budget-item',
            params: { budget: null },
            templateUrl: 'budget-item.html',
            controller: 'BudgetItemCtrl'
        }).state('progress', {
            url: '/progress',
            templateUrl: 'progress.html',
            controller: 'ProjectCtrl'
        }).state('progress-item', {
            url: '/progress-item',
            params: { project: null },
            templateUrl: 'progress-item.html',
            controller: 'ProgressItemCtrl'
        }).state('calculate', {
            url: '/calculate',
            templateUrl: 'calculate.html',
            controller: 'BudgetCtrl'
        }).state('calculate-item', {
            url: '/calculate-item',
            params: { budget: null },
            templateUrl: 'calculate-item.html',
            controller: 'CalculateItemCtrl'
        }).state('tax-calculate-item', {
            url: '/tax-calculate-item',
            params: { budgets: null },
            templateUrl: 'tax-calculate-item.html',
            controller: 'CalculateCtrl'
        }).state('supplier', {
            url: '/supplier',
            templateUrl: 'supplier.html',
            controller: 'SupplierCtrl'
        }).state('supplier-item', {
            url: '/supplier-item',
            params: { supplier: null },
            templateUrl: 'supplier-item.html',
            controller: 'SupplierItemCtrl'
        }).state('cost-tax', {
            url: '/cost-tax',
            params: { supplier: null },
            templateUrl: 'cost-tax.html',
            controller: 'CostTaxCtrl'
        }).state('purchase', {
            url: '/purchase',
            templateUrl: 'purchase.html',
            controller: 'ProjectCtrl'
        }).state('purchase-import', {
            url: '/purchase-import',
            params: { project: null },
            templateUrl: 'purchase-import.html',
            controller: 'PurchaseImportCtrl'
        }).state('engineering-purchase-item', {
            url: '/engineering-purchase-item',
            params: { project: null },
            templateUrl: 'engineering-purchase-item.html',
            controller: 'EngineeringPurchaseItemCtrl'
        }).state('receipt', {
            url: '/receipt',
            templateUrl: 'receipt.html',
            controller: 'ProjectCtrl'
        }).state('receipt-item', {
            url: '/receipt-item',
            params: { project: null },
            templateUrl: 'receipt-item.html',
            controller: 'ReceiptCtrl'
        }).state('receipt-progress-item', {
            url: '/receipt-progress-item',
            params: { project: null },
            templateUrl: 'receipt-progress-item.html',
            controller: 'ReceiptProgressItemCtrl'
        }).state('tax-manager', {
            url: '/tax-manager',
            params: { project: null },
            templateUrl: 'tax-manager.html',
            controller: 'ProjectCtrl'
        }).state('tax-analysis-in-count-item', {
            url: '/tax-analysis-in-count-item',
            params: { project: null },
            templateUrl: 'tax-analysis-in-count-item.html',
            controller: 'TaxAnalysisCtrl'
        }).state('tax-analysis-tax-item', {
            url: '/tax-analysis-tax-item',
            params: { project: null },
            templateUrl: 'tax-analysis-tax-item.html',
            controller: 'TaxAnalysisTaxCtrl'
        }).state('tax-man-manager', {
            url: '/tax-man-manager',
            templateUrl: 'supplier.html',
            params: { man: true },
            controller: 'SupplierCtrl'
        });

        
    }
]);
