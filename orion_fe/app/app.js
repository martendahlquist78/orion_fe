var app = angular.module('orionApp', ['ngRoute','ui.bootstrap','ngAnimate']);
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


