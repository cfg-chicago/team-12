var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'usertype.html'
	})
	/*.when('/user', {
		templateUrl:'usertype.html'	
	})*/
	.when('/login', {
		templateUrl:'login.html'
	})
	.otherwise({
		redirectTo: '/'
	});	
});

app.controller('userCtrl', function($scope, $location){
	$scope.submit = function(){
		$location.path('/login');
	};
});