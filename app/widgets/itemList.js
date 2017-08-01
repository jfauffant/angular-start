angular.module('ziggyApp.itemList',[])
.controller('itemListCtrl',['$scope',function($scope){
	$scope.view = 'success';
}])
.directive('itemList',[function(){
	return {
		restrict:'E',
		controller:'itemListCtrl',
		templateUrl:'/views/itemList.html'
	}
}])