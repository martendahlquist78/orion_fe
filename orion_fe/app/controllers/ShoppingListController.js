app.controller('ShoppingListController', function ($scope, mainService) {
	var typeUrl = 'shoppinglist';
	$scope.shoppinglists = mainService.getItems();
});
