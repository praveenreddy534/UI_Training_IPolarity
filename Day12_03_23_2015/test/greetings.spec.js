describe('Greeting Module Test', function(){
	beforeEach(module('myApp'));
	var scope,mathUtilSrv = undefined,myLocalCtrl;
	beforeEach(inject(function($rootScope, mathUtil, $controller){
		scope = $rootScope.$new();
		myLocalCtrl = $controller("Parent1Ctrl",{$scope:scope});
		mathUtilSrv = mathUtil;
	}));
	it('should add 2 and 3 and output result as 5',function(){
		//var result = mathUtilSrv.add(2,3);
		//expect(scope.test).toEqual('kanchan');
		console.log(scope)
	});
});