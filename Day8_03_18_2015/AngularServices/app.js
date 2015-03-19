
var app = angular.module('myApp',[]);
app.service('customerService', function ($http){
	
	this.getCustomerData = function(){
		return $http.get('http://www.w3schools.com/website/Customers_JSON.php');
	}
});
app.factory('customerFactory', function($http){
	var getCustData = function(){
		return $http.get('http://www.w3schools.com/website/Customers_JSON.php');
	}
	return{
		getCustomerData: getCustData
	}
});
app.controller('FirstCtrl', function($scope, $rootScope, customerService){
	$rootScope.greeting = "Greetings from Root Scope";
	$scope.greeting = "greeting from first controller";
	$scope.getGreeting = function(){
		alert("This is from the function ");
	}
	$scope.fruits = ['Apple','Mango','Kiwi','Orange','Pineapple'];
	customerService.getCustomerData().success(function (results){
			console.log("results from api", results)
			$scope.customers = results;
		});
});

app.controller('GreetingsCtrl',function($scope, customerFactory){
	$scope.greeting = "Greeting from GreetingsCtrl";
	customerFactory.getCustomerData().success(function (results){
			console.log("results from api fact", results)
			$scope.customers = results;
		});
});
/*
app.controller('SecondCtrl', function($scope){
	$scope.greeting = "greeting from second controller";
});
*/