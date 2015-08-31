var shoppingListControllers = angular.module('ShoppingListControllers', []);

shoppingListControllers.controller('GetShoppingListCtrl', function ($scope, lists){
	lists.list(function(lists) {
    $scope.lists = lists;
  });
});

shoppingListControllers.controller('GetShoppingListCtrl', function ($scope, $routeParams, lists){
	lists.find($routeParams.listId, function(list) {
	    $scope.list = list;
	});
});