var app = angular.module('orionApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/shoppinglists',
            {
                controller: 'ShoppingListController',
                templateUrl: 'app/views/shoppinglists.html'
            })
        .when('/shoppinglists/:listId',
            {
                controller: 'ShoppingListController',
                templateUrl: 'app/views/shoppinglist.html'
            })
        .otherwise({ redirectTo: '/' });
});




