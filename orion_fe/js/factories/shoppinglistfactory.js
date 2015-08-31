angular.module('ShoppingListUrlFactory', ['config'])
       .factory('lists', function($http){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: config+'shoppinglist/1', //TODO get logged in userid
        cache: true
      }).success(callback);
    },
    find: function(listid, callback){
      $http({
        method: 'GET', 
        url: config+'shoppinglist/1/' + listid,   //TODO get logged in userid
        cache: true
      }).success(callback);
    }
  };
});