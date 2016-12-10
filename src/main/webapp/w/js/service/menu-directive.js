 directives.directive('menuToggle', ['$timeout', function($timeout) {
     return {
         scope: {
             section: '='
         },
         templateUrl: 'js/tpl/menu-toggle.tmpl.html',
         link: function($scope, $element) {
             var controller = $element.parent().controller();
             $scope.isOpen = function() {
                 return controller.isOpen($scope.section);
             };
             $scope.toggle = function() {
                 controller.toggleOpen($scope.section);
             };
         }
     };
 }]).directive('menuLink', function() {
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
 }).filter('nospace', function () {
      return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
      };
    }).filter('humanizeDoc', function () {
      return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
          return doc.name.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }
        
        return doc.label || doc.name;
      };
  });
