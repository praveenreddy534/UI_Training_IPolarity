
var app = angular.module('myApp',['greetingsModule']);

app.service('customerService', function ($http){	
	this.getCustomerData = function(){
		return $http.get('http://www.w3schools.com/website/Customers_JSON.php');
	}
});
app.controller('Parent1Ctrl', function($scope, customerService){
	$scope.dateObj = new Date();
	customerService.getCustomerData().success(function (results){
			console.log("results from api", results)
			$scope.customers = results;
		});
});



