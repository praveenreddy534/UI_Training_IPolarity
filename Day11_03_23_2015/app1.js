
var app = angular.module('myApp',
						['greetingsModule',
						'MathModule',
						'LocalStorageModule'
						]);


app.controller('Parent1Ctrl', function($scope, greetings, MathConstants, mathUtil, localStorageService){
	$scope.hello = "Hello " 
					+ greetings.getGreeting("morning");
	$scope.pi = MathConstants.pie;
	$scope.sumOf2n3 = mathUtil.add(2,3);
	$scope.div10by2 = mathUtil.divide(10,2);
	$scope.ans = mathUtil.substract($scope.sumOf2n3,$scope.div10by2,5,6, 11, -22);
	
	$scope.insertIntoBrw = function(){
		localStorageService.set("token","I Am Authorized");
	}
});

