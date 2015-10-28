app.controller('ShoppingListController', function ($scope, mainService,$routeParams) {
	var typeUrl = 'shoppinglist';
	if ($routeParams.listId) {
		mainService.getItem(typeUrl,$routeParams.listId,function(data) {
			 $scope.shoppinglists = data; 
		});
    }
}).
controller('ShoppingListsController', function ($scope, mainService, $routeParams) {
	var typeUrl = 'shoppinglist';
	$scope.shoppinglists = [];
	mainService.getItems(typeUrl,function(data) {
			 $scope.shoppinglists = data;
	});
	$scope.createList = function(){
			mainService.insertItem(typeUrl,
		 	function(data){	
				$scope.shoppinglists.push(data);
				$scope.list.name = '';
			},
			function(error){	
				 
			},
			$scope.list);
	}
    $scope.statuses = [{name:'Aktiv',value:'1'},{name:'Inaktiv',value:'0'}];
});



//data för rad 5 och 10 kommer att ha olika innehåll, därför två metoder.