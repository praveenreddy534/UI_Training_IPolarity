
app.filter('addSymbol', function(){
	return function(input, symbol){
		return input + ' ' + symbol;
	}
});