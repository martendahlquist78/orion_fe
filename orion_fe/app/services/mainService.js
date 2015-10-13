app.service('mainService', ['$http', function ($http) {
	var urlBase = 'http://localhost:8080';
    this.getItems = function () {
    	 return $http.get(urlBase+'/shoppinglist/1/2');
    };
}]);
