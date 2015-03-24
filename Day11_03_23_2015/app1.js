
var app = angular.module('myApp',
						['greetingsModule',
						'MathModule'						
						]);


app.controller('Parent1Ctrl', function($scope, greetings, MathConstants, mathUtil){
	$scope.hello = "Hello " 
					+ greetings.getGreeting("morning");
	$scope.pi = MathConstants.pie;
	$scope.sumOf2n3 = mathUtil.add(2,3);
});

