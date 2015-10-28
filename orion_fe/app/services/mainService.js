app.factory('mainService', function($http) {
	var urlBase = 'http://localhost:8080';
	var token = '1224'; //TODO
	   return {
	     getItems: function(referer,callback) {
	       $http.get(urlBase+'/'+referer+'/'+token).success(callback);
	     },
	     getItem: function(referer,id,callback) {
		   $http.get(urlBase+'/'+referer+'/'+token+'/'+id).success(callback);
		  },
		 insertItem: function (referer,callback, errorcallback, postjsonobj) {
			 console.log(postjsonobj);
	        $http.post(urlBase+'/'+referer+'/create/'+token, postjsonobj).success(callback).error(errorcallback);
	     }
	  }
});