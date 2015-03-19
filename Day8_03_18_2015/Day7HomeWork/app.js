
var app = angular.module('myApp',[]);

app.controller('FirstCtrl', function($scope){
	$scope.movies = [
		{
			"Name" : "Sholay"
		},
		{
			"Name" : "Laksya"
		},
		{
			"Name" : "Border"
		},
		{
			"Name" : "Lagaan"
		}
	]
	$scope.errorMsg = '';
	$scope.addToList = function(enteredMovie){
		if(enteredMovie === null || typeof(enteredMovie) === undefined) return;
		var numOfMovies = $scope.movies.length;
		var duplicateMovie = false;
		for(var i = 0; i < numOfMovies; i++){
			var eachMovie = $scope.movies[i].Name.toString().trim().toLowerCase();
			if(eachMovie === enteredMovie.toString().trim().toLowerCase()){
				duplicateMovie = true;
				$scope.errorMsg = "This movie is already present in the list, please try a different one !!"
				break;
			}
		}
		if(!duplicateMovie){
			var newMovie = {
				"Name": enteredMovie
			}
			$scope.movies.push(newMovie);
			$scope.errorMsg = ''
		}
		$scope.enteredMovie = undefined
	}
}); 