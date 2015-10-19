app.factory('mainService', function($http) {
	var urlBase = 'http://localhost:8080';
	var userId = '2'; //TODO
	   return {
	     getItems: function(referer,callback) {
	       $http.get(urlBase+'/'+referer+'/'+userId).success(callback);
	     },
	     getItem: function(referer,id,callback) {
		   $http.get(urlBase+'/'+referer+'/'+userId+'/'+id).success(callback);
		  },
		  insertItem: function (referer,callback, postjsonobj) {
	          $http.post(urlBase+'/'+referer+'/create/'+userId, postjsonobj);
	      }
	   }
});
