app.controller('ShoppingListController', function ($scope, mainService) {
	var typeUrl = 'shoppinglist';
	mainService.getItems(typeUrl,function(data) {
		 $scope.shoppinglists = data;
	});
	//TODO hur göra för att inte båda dessa metoder ska köras?
	mainService.getItem(typeUrl,1,function(data) {
	     $scope.list = data;
	});
});
