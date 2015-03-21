
var app = angular.module('myApp',[]);


app.controller('FirstCtrl', function($scope){
	
});

app.directive('info', function(){
	var link;
	link = function (scope, element, attrs){
		scope.templateMessage = "Hello from Link function";
		
	};	
	return{
		link: link,
		scope:true,
		replace: true,
		template: "<div><input type='text' ng-model='enteredText' />  Entered Value is ::: {{enteredText}}</div>"
	}
});