
var app = angular.module('myApp',[]);


app.controller('Parent1Ctrl', function($scope){
	$scope.$on('catchMeIAm1AA', function(){
		console.log("You are caught in 1");
	});
});
app.controller('Parent1ACtrl', function($scope){
	$scope.$on('catchMeIAm1AA', function(){
		console.log("You are caught in 1A");
	});
	$scope.triggerEvent = function(){
		$scope.$broadcast('catchMeIAm1A');
	}	
});
app.controller('Parent1BCtrl', function($scope){
	$scope.sayHello = function(text){
        console.log("In Parent 1B :", text);
    }
});
app.controller('Parent1AACtrl', function($scope){
	//$scope.$emit('catchMeIAm1AA');
	$scope.$on('catchMeIAm1A', function(){
		console.log("You are caught in 1AA");
	});
});

app.directive('redbtn', function(){
    var link;
    link = function(scope,ele,attrs){
        scope.userText = scope.text;
        scope.btnClick = function(){
            console.log("Button Clicked :", scope.userText);
            scope.onBtnClick({text: scope.userText});
        }
    }
	return{
        link: link,
		replace: true,
		restrict: 'AE',
		scope: {
            text: '@',
            onBtnClick: '&'

        },
		templateUrl: 'extraInfo.html'
	}
});






















/*
app.controller('infoCtrl',function($scope){
	$scope.templateMessage = "Hello from Controller function";
	$scope.customerName = $scope.user;
	$scope.$watch('customerName', function(){
		$scope.change({newName : $scope.customerName});
	});
});


app.directive('info', function(){
	return{
		scope:{
			user:'=',
			change: '&'
		},
		restrict: 'AE',
		replace: true,
		controller: 'infoCtrl',
		templateUrl: "extraInfo.html"
	}
});

*/