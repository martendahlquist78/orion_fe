var app = angular.module('orionApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/shoppinglists',
            {
                controller: 'ShoppingListsController',
                templateUrl: 'app/views/shoppinglists.html'
            })
        .when('/shoppinglists/:listId',
            {
                controller: 'ShoppingListController',
                templateUrl: 'app/views/shoppinglist.html'
            })
        .otherwise({ redirectTo: '/' });
});
app.directive('ngConfirmClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngConfirmMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngConfirmClick);
                }
            });
        }
    }
}]);


