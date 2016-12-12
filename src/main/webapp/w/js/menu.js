app.filter('nospace', function() {
    return function(str) {
        return str.replace(" ", "");
    }
});
app.directive('menuToggle', ['$timeout', function($timeout) {
    return {
        scope: {
            section: '='
        },
        templateUrl: 'js/tpl/menu-toggle.tmpl.html',
        link: function($scope, $element) {
            var controller = $element.parent().controller();
            $scope.isOpen = function() {
                return true;
            };
            $scope.toggle = function() {
                controller.toggleOpen($scope.section);
            };
        }
    };
}]);
app.directive('menuLink', function() {
    return {
        scope: {
            section: '='
        },
        templateUrl: 'js/tpl/menu-link.tmpl.html',
        link: function($scope, $element) {
            var controller = $element.parent().controller();

            $scope.focusSection = function() {
                // set flag to be used later when
                // $locationChangeSuccess calls openPage()
                controller.autoFocusContent = true;
            };
        }
    };
});
