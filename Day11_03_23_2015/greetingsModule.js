var gm = angular.module('greetingsModule',[]);

gm.service('greetings', function(){
	this.greetingText = {
		morning: 'Good Morning',
		afternoon: 'Good Afternoon',
		evening: 'Good Evening',
		night: 'Good Night'
	}
	this.getGreeting = function(type){
		return this.greetingText[type];
	}
});

var math = angular.module('MathModule', []);
math.constant('MathConstants', {
		pie : 3.14,
		e : 2.718		
	});

math.service('mathUtil', function(){
	//Addition
	this.add = function(){
		var i, argLen = arguments.length,sum=0;
		for( i = 0; i < argLen; i++){
			sum += arguments[i];
		}
		console.log("Addition : ", sum);
		return sum;

	}
	//Substraction
	this.substract = function(){
		//5 , 5 0 - 5 - 5 = -10
		var i, argLen = arguments.length,sum=arguments[0];
		for( i = 0; i < argLen - 1; i++){
			sum  = sum - arguments[i+1];
			console.log("Sum :", sum);
		}
		console.log('substract 1: ', sum);
		return sum;
	}
	//Multiplication
	this.multiply = function(){
		var i, argLen = arguments.length,product=1;
		for( i = 0; i < argLen; i++){
			product *= arguments[i];
		}
		return product;
	}
		//Substraction
	this.divide = function(a, b){
		if(b == 0) return "Divide by Zero Exception";
		try{
			console.log('divide: ', a/b);
			return a/b;
		}
		catch(err){
			return "Error occured : " + err;
		}
	}
});