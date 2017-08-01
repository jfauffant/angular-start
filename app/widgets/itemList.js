angular.module('ziggyApp.itemList',[])
.controller('itemListCtrl',['$scope','itemListService',function($scope,items){ // controllers shoudld only have code related to manipulating the DOM, (HTML)
	$scope.view = 'success';
	$scope.items = [];
	
	items.getItems().then(function(list){ // items references the itemListService below.  we're calling that services' getItems function directly in the controller
		$.each(list,function(index,item){
			$scope.items.push(item);
		})
		
		$scope.$apply(); // we're in a promise.  This happens off of the main thread's processing cycle, so the $scope.$apply() command is used to say, "process any changes that happened in here"
	},function(error){
		console.error(error);
	})
}])
.factory('itemListService',['$http',function($http){ // services or factories should contain all data calls and data normalization
	function getItems(){
		return $http.get('./data/itemList.json').then(function(returnObj){
			return returnObj.data
		})
	}
	var serviceObject = {
		getItems : getItems
	}
	
	return serviceObject; // factories always have to return a service object containing all of the functions the service will expose
}])
.directive('itemList',[function(){ // this is what makes the angular directive.  in this case, AngularJS will look for any html named <item-list></item-list> and replace it with the above functionality.
	return {
		restrict:'E', 
		controller:'itemListCtrl',
		templateUrl:'/views/itemList.html'
	}
}])

// there's a ton of documentation available on AngularJS.  this is specifically what I know, and it's an old version of the programming language.

// I'd suggest getting comfortable with this, or if you feel daring, jumping into Angular 2.0 or 4.0, both of which take a similar, but definitely different approach.