﻿app.controller('ShoppingListController', function ($scope, mainService,$routeParams) {
	var typeUrl = 'shoppinglist';
	if ($routeParams.listId) {
		mainService.getItem(typeUrl,$routeParams.listId,function(data) {
			 $scope.shoppinglists = data; 
		});
    }
	else{
		mainService.getItems(typeUrl,function(data) {
			 $scope.shoppinglists = data;
		});
	}
	$scope.createList = function(){
		 	mainService.insertItem(typeUrl,function(data){	
		 		
			},$scope.list);
	}
    $scope.statuses = [{name:'Aktiv',value:'1'},{name:'Inaktiv',value:'0'}];
});

//data för rad 7 och 12 kommer att ha olika innehåll, därför två metoder.