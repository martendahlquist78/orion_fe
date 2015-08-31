var orionApp = angular.module('orionApp', [
  'ngRoute',
  'ShoppingListControllers',
  'ShoppingListUrlFactory'
  //'ShoppingListDirective'
]);

orionApp.constant('config', {
    appName: 'ORION',
    appVersion: 0.1,
    apiUrl: 'http://localhost:8080/'
});

orionApp.config(function($routeProvider) {
  $routeProvider.
    when('/shoppinglists', {
      templateUrl: '/views/shoppinglists.html',
      controller: 'GetShoppingListCtrl'
    }).
    when('/shoppinglist/:listId', {
      templateUrl: '/views/shoppinglist.html',
      controller: 'GetShoppingListCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});