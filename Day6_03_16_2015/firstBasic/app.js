
var app = angular.module('myApp',[]);

app.controller('FirstCtrl', function($scope, $rootScope){
	$rootScope.greeting = "Greetings from Root Scope";
	$scope.greeting = "greeting from first controller";
	$scope.getGreeting = function(){
		alert("This is from the function ");
	}
	$scope.fruits = ['Apple','Mango','Kiwi','Orange','Pineapple'];
});

app.controller('GreetingsCtrl',function($scope){
	$scope.greeting = "Greeting from GreetingsCtrl";
	console.log("From Controller" , $scope.greetingModel)
	$scope.$watch('greetingModel', function(){
		console.log("From Watch" , $scope.greetingModel)
	});
});
/*
app.controller('SecondCtrl', function($scope){
	$scope.greeting = "greeting from second controller";
});
*/