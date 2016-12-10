controllers.controller('taxController', ['$scope', '$mdSidenav', 'menu', function($scope, $mdSidenav, menu) {
    var vm = this;
    var aboutMeArr = ['Family', 'Location', 'Lifestyle'];
    var budgetArr = ['Housing', 'LivingExpenses', 'Healthcare', 'Travel'];
    var incomeArr = ['SocialSecurity', 'Savings', 'Pension', 'PartTimeJob'];
    var advancedArr = ['Assumptions', 'BudgetGraph', 'AccountBalanceGraph', 'IncomeBalanceGraph'];

    //functions for menu-link and menu-toggle
    vm.isOpen = isOpen;
    vm.toggleOpen = toggleOpen;
    vm.autoFocusContent = false;
    vm.menu = menu;

    vm.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };

    function isOpen(section) {
        return menu.isSectionSelected(section);
    }

    function toggleOpen(section) {
        menu.toggleSelectSection(section);
    }
}]);
