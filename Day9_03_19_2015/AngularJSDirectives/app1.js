
var app = angular.module('myApp',[]);


app.controller('FirstCtrl', function($scope){
	
});

app.directive('info', function(){
	var link;
	link = function (scope, element, attrs){
		
	};	
	return{
		link: link,
		replace: true,
		scope: true,
		template: '<div>Hello</div>'
	}
});