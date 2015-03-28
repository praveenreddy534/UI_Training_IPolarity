
var app = angular.module('myApp',
						['greetingsModule',
						'MathModule',
						'LocalStorageModule'
						]);


app.controller('Parent1Ctrl', function($scope){
	var validateData = function(value){
		if(isNaN(value)) return false;
		return true;
	}
	$scope.submitForm = function(valid){
		// submit logic
		// data is inserted to db 
		if(validateData($scope.phoneNum)){
			$scope.userDtlForm.phoneNum.$setValidity('number',true);
			var firstNum = ($scope.phoneNum + '').split('')[0];
			if(firstNum == 0){
				$scope.userDtlForm.phoneNum.$setValidity('zeroCheck', false );
			}else{
				$scope.userDtlForm.phoneNum.$setValidity('zeroCheck', true );
			}
		}
		else{
			$scope.userDtlForm.phoneNum.$setValidity('number',false);
		}
	}
});

