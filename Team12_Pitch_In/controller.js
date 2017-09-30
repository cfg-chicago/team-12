var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'usertype.html',
		controller: 'userController'
		
	})
	/*.when('/user', {
		templateUrl:'usertype.html'	
	})*/
	.when('/login', {
		templateUrl:'login.html',
		controller: 'loginController'
	})
	.otherwise({
		redirectTo: '/'
	});	
});

app.controller('userController', function($scope, $location){
	$scope.submit = function(){
		$location.path('login.html');
	};
});