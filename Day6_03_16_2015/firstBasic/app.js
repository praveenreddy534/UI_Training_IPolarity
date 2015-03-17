
var app = angular.module('myApp',[]);

app.controller('FirstCtrl', function($scope){
	$scope.greeting = "greeting from controller";
});